<template>
  <b-container>
    <!--b-button v-b-toggle.sample class="float-left">Sample</b-button-->
    <b-alert v-if="!isMobile()" show dismissible>To watch please allow mixed content in your browser.</b-alert>
    <b-sidebar id="sample" title="Sample List" :width="sb_width" shadow>
      <b-input-group prepend="URL" class="mt-3">
        <b-form-input v-model="sampleURL" :placeholder="sampleURL" type='url'></b-form-input>
        <b-input-group-append>
          <b-button v-b-tooltip.hover title="Load" @click="load"><b-icon-download></b-icon-download></b-button>
        </b-input-group-append>
      </b-input-group>
      <!--b-card no-body-->
      <b-form-select v-model="selected" :options="channels" text-field="title" @change="index(0)" multiple :select-size="16"></b-form-select>
      <!--/b-card-->
      <b-button v-b-tooltip.hover title="To Personal List" @click="toPersonal"><b-icon-chevron-double-right></b-icon-chevron-double-right></b-button>
      <!--b-button @click="unselect">Unselect</b-button-->
    </b-sidebar>
    <!--b-button v-b-toggle.personal class="float-right">Personal</b-button-->
    <b-sidebar id="personal" title="Personal List" :width="sb_width" right shadow>
      <b-form-select v-model="perSelected" :options="personal" text-field="title" @change="index(1)" multiple :select-size="16" :key="rerender"></b-form-select>
      <b-button v-b-tooltip.hover title="Up" @click="up_down(-1)"><b-icon-chevron-double-up></b-icon-chevron-double-up></b-button>
      <b-button v-b-tooltip.hover title="Down" @click="up_down(1)"><b-icon-chevron-double-down></b-icon-chevron-double-down></b-button>
      <b-button v-b-tooltip.hover title="Delete" @click="delItems"><b-icon-trash></b-icon-trash></b-button>
      <b-button v-if="isLoggedIn" v-b-tooltip.hover title="Save" @click="save"><b-icon-archive></b-icon-archive></b-button>
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
      <b-card-body v-if="details">
        <b-card-title v-if="isMobile()">
          <b-link :href="source" disabled>{{details.title}}</b-link>
        </b-card-title>
        <b-card-title v-else>{{details.title}}</b-card-title>
        <b-card-sub-title>
          {{ details.disp_name }} 
          {{ details.pstart  | slice}}-{{ details.pstop | slice}}
          <b-button size="sm" v-b-tooltip.hover title="Backward" @click="backward"><b-icon-chevron-double-left></b-icon-chevron-double-left></b-button>
          <b-button size="sm" v-b-tooltip.hover title="Now" @click="now"><b-icon-clock></b-icon-clock></b-button>
          <b-button size="sm" v-b-tooltip.hover title="Forward" @click="forward"><b-icon-chevron-double-right></b-icon-chevron-double-right></b-button>
        </b-card-sub-title>
        <b-card-text>{{ details.pdesc }}</b-card-text>
      </b-card-body>
      <video v-if="!isMobile()" ref="video" type="video/mp4" poster="//vjs.zencdn.net/v/oceans.png" preload="metadata" controls width="100%" ></video>
    </b-card>
  </b-container>
</template>

<script>
import { mapGetters } from 'vuex'
import Hls from 'hls.js'
import { AXIOS } from '../axios-common';

export default {
  name: 'M3U',
  data() {
    return {
      sampleURL: "http://topplay.do.am/FreeBestTV.m3u",
      channels: [],
      selected: [],
      personal: [],
      perSelected: [],
      //personal_value: [],
      tabIndex: 0,
      details: null,
      prTime: new Date(),
      hls: new Hls(),
      rerender: false,
    }
  },
  beforeMount: function() {
      if (this.isLoggedIn) 
        AXIOS.get('/load_personal')
        .then(resp => this.personal = resp.data)
        .catch(err => {
          alert(err.response.data.detail)
          this.$store.dispatch('logout')
          this.personal = []
        })
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
    isMobile: function() {
      if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        return true;
      } else {
        return false;
      }
      //return true
    },
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
      //console.log(AXIOS.defaults.headers.common['Authorization'])
      AXIOS.post('/save',this.personal)
      .then(resp => {
        var fileURL = window.URL.createObjectURL(new Blob([resp.data]));
        var fileLink = document.createElement('a');
        fileLink.href = fileURL;
        fileLink.setAttribute('download', 'list.m3u');
        document.body.appendChild(fileLink);
        fileLink.click();        
        //console.log(resp.data)
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
    ...mapGetters(['isLoggedIn']),
    source: function() {
      if ( this.tabIndex == 0 ) { 
        if (this.selected) return this.selected[0]
      }
      else if (this.perSelected) return this.perSelected[0]
      return ''
    },
    sb_width: function() {
      if (this.isMobile()) return '100%'
      else return '43%'
    }
  },
  watch: {
    isLoggedIn: function(val) {
      //console.log('watch',val, oldVal)
      if (!val) this.personal = []
    },
    source: function() {
      if (!this.source) return
      if (this.hls) this.hls.destroy()
      //console.log(this.source)
      this.prTime = new Date()
      //console.log(this.prTime.getMonth()+1,this.prTime.getDate())
      if (this.isMobile()) return
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
      AXIOS.get(url).then(response => { if (response.data) this.details = response.data
                                        else this.details = null })
      //this.$axios.get(url).then(response => (this.details = response.data))
    }
  }
}
</script>
