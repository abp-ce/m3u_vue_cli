<template>
  <b-container>
    <!--b-button v-b-toggle.sample class="float-left">Sample</b-button-->
    <b-sidebar id="sample" title="Sample List" width="40%" shadow>
      <b-input-group prepend="Sample M3U list" class="mt-3">
        <b-form-input v-model="sampleURL" :placeholder="sampleURL" type='url'></b-form-input>
        <b-input-group-append>
          <b-button @click="load">Load</b-button>
        </b-input-group-append>
      </b-input-group>
      <!--b-card no-body-->
      <b-form-select v-model="selected" :options="channels" text-field="title" @change="index(0)" multiple :select-size="16"></b-form-select>
      <!--/b-card-->
      <b-button @click="toPersonal">To personal</b-button>
      <!--b-button @click="unselect">Unselect</b-button-->
    </b-sidebar>
    <!--b-button v-b-toggle.personal class="float-right">Personal</b-button-->
    <b-sidebar id="personal" title="Personal List" width="40%" right shadow>
      <b-form-select v-model="perSelected" :options="personal" text-field="title" @change="index(1)" multiple :select-size="16" :key="rerender"></b-form-select>
      <b-button @click="up_down(-1)">Up</b-button>
      <b-button @click="up_down(1)">Down</b-button>
      <b-button @click="delItems">Delete</b-button>
      <b-button v-if="this.$store.getters.isLoggedIn" @click="save">Save</b-button>
    </b-sidebar>
    <!--b-tabs v-model="tabIndex" content-class="mt-3">
      <b-tab title="Sample">
        <b-input-group prepend="Sample M3U list" class="mt-3">
          <b-form-input v-model="sampleURL" :placeholder="sampleURL" type='url'></b-form-input>
          <b-input-group-append>
            <b-button @click="load">Load</b-button>
          </b-input-group-append>
        </b-input-group>
        <b-form-select v-model="selected" :options="channels" text-field="title" multiple :select-size="8"></b-form-select>
        <b-button @click="toPersonal">To personal</b-button>
      </b-tab>
      <b-tab title="Personal">
        <b-form-select v-model="perSelected" :options="personal" text-field="title" multiple :select-size="8" :key="rerender"></b-form-select>
        <b-button @click="up_down(-1)">Up</b-button>
        <b-button @click="up_down(1)">Down</b-button>
        <b-button @click="delItems">Delete</b-button>
      </b-tab>
    </b-tabs-->
    <b-card no-body>
      <b-card-body :title="details.title">
        <b-card-sub-title v-if="details">
          {{ details.disp_name }} 
          {{ details.pstart  | slice}}-{{ details.pstop | slice}}
          <b-button size="sm" @click="backward">Backward</b-button>
          <b-button size="sm" @click="now">Now</b-button>
          <b-button size="sm" @click="forward">Forward</b-button>
        </b-card-sub-title>
        <b-card-text>{{ details.pdesc }}</b-card-text>
      </b-card-body>
      <video ref="video" type="video/mp4" poster="//vjs.zencdn.net/v/oceans.png" preload="metadata" controls width="100%" ></video>
    </b-card>
  </b-container>
</template>

<script>
import Hls from 'hls.js'
import { AXIOS } from '../axios-common';

export default {
  name: 'M3U',
  data() {
    return {
      sampleURL: "http://c04f014174dc.akciatv.org/playlists/uplist/b239d5cc573dedb8165e3e1c2c5ebcee/playlist.m3u8",
      channels: [],
      selected: [],
      personal: [],
      perSelected: [],
      //personal_value: [],
      tabIndex: 0,
      details: '',
      prTime: new Date(),
      hls: new Hls(),
      rerender: false
    }
  },
  beforeUnmount: function() {
    this.hls.destroy()
  },
  filters: {
    slice: function(value) {
      let tm = new Date(value + 'Z')
      return tm.getHours().toString().padStart(2,'0') + ':' + tm.getMinutes().toString().padStart(2,'0')
    }
  },
  methods: {
    index: function(ind) {
      this.tabIndex = ind
    },
    load: function() {
      const url = `load/?url=${this.sampleURL}`
      AXIOS.get(url).then(response => (this.channels = response.data))
    },
    toPersonal: function() {
      this.perSelected = []
      this.selected.forEach(sel => { 
        if (!this.personal.find(p => p.value == sel)) {
          this.personal.push(this.channels.find(el => el.value == sel))
          //this.personal_value.push(sel);
        } 
      })
    },
    up_down: function(dir) {
      if ( dir == 1 ) this.perSelected.reverse()
      for (let ps of this.perSelected) {
        let ind = this.personal.findIndex(p => p.value == ps)
        if (dir == -1 && ind == 0) break
        else if (dir == 1 && ind == this.personal.length - 1) break
        [this.personal[ind+dir], this.personal[ind]] = [this.personal[ind], this.personal[ind+dir]];
        //[this.personal_value[ind+dir], this.personal_value[ind]] = [this.personal_value[ind], this.personal_value[ind+dir]];
      }
      if ( dir == 1 ) this.perSelected.reverse()
      this.rerender =!this.rerender
    },
    delItems: function() {
      //this.personal_value = this.personal_value.filter(pv => !this.perSelected.includes(pv))
      this.personal = this.personal.filter(p => !this.perSelected.includes(p.value)) 
    },
    save: function() {
      console.log(AXIOS.defaults.headers.common['Authorization'])
      AXIOS.post('/save',this.personal)
      .then(resp => {
        console.log(resp.data)
      })
      .catch(err => {
        alert(err.response.data.detail)
      })
    },
    backward: function() {
      let t = new Date(this.details.pstart + 'Z')
      t.setMinutes(t.getMinutes() - 1);
      this.prTime = t
    },
    forward: function() {
      let t = new Date(this.details.pstop + 'Z')
      t.setMinutes(t.getMinutes() + 1);
      this.prTime = t
    },
    now: function() {
      this.prTime = new Date()
    }
  },
  computed: {
    /*personal: function() {
      return this.channels.filter(chn => this.personal_value.includes(chn.value))
    },*/
    source: function() {
      if ( this.tabIndex == 0 ) { 
        if (this.selected) return this.selected[0]
      }
      else if (this.perSelected) return this.perSelected[0]
      return ''
    }
  },
  watch: {
    source: function() {
      if (!this.source) return
      if (this.hls) this.hls.destroy()
      //console.log(this.source)
      this.prTime = new Date()
      //console.log(this.prTime.getMonth()+1,this.prTime.getDate())
      let video = this.$refs["video"];
      if (Hls.isSupported()) {
        this.hls = new Hls();
        this.hls.loadSource(this.source);
        this.hls.attachMedia(video);
        this.hls.on(Hls.Events.MANIFEST_PARSED, function() {
          video.play();
        });
      }
      else if (video.canPlayType('application/vnd.apple.mpegurl')) {
        video.src = this.source;
      }
    },
    prTime: async function() {
      let channel_name = ''
      if ( this.tabIndex == 0 ) {
        if (this.channels) channel_name = this.channels.filter(chn => chn.value == this.source)[0].title
      }
      else if (this.personal) channel_name = this.personal.filter(chn => chn.value == this.source)[0].title
      const url = (channel_name + '/' + this.prTime.toISOString())
      AXIOS.get(url).then(response => (this.details = response.data))
      //this.$axios.get(url).then(response => (this.details = response.data))
    }
  }
}
</script>
