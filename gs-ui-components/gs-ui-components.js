"use strict";function gsuiToggle(t,i){this.element=t,this.data=i,this.isOn=!1,this._circleClass=t.querySelector(".gs-ui--circle").classList,t.oncontextmenu=function(){return!1},t.onmousedown=this.__elementMousedown.bind(this)}function gsuiSpanEditable(t,i){this.element=t,this.data=i,this.placeholder="",this.span=t.querySelector("span"),this.input=t.querySelector("input"),t.ondblclick=this.__elementDblclick.bind(this),this.input.onblur=this.__inputBlur.bind(this),this.input.onkeydown=this.__inputKeydown.bind(this)}!function(){var t=Handlebars.template,i=Handlebars.templates=Handlebars.templates||{};i["gs-ui-span-editable"]=t({compiler:[7,">= 4.0.0"],main:function(t,i,e,s,n){return'<div class="gs-ui-span-editable">\r\n\t<span class="gs-ui--text-overflow"></span>\r\n\t<input type="text"/>\r\n</div>\r\n'},useData:!0}),i["gs-ui-toggle"]=t({compiler:[7,">= 4.0.0"],main:function(t,i,e,s,n){return'<div class="gs-ui-toggle">\r\n\t<div class="gs-ui--circle"></div>\r\n</div>\r\n'},useData:!0}),i["gs-ui-waveform"]=t({compiler:[7,">= 4.0.0"],main:function(t,i,e,s,n){return'<div class="gs-ui-waveform gs-ui--pixelated">\r\n</div>\r\n'},useData:!0})}(),gsuiToggle.prototype={toggle:function(t){t!==this.isOn&&(this.isOn=t,this._circleClass.toggle("gs-ui--on",t),this.data.onchange&&this.data.onchange(t))},groupWith:function(t){var i=this.group;t.group=t.group||[t],t!==this&&i!==t.group&&(i&&i.splice(i.indexOf(this),1),this.group=t.group,t.group.push(this))},__elementMousedown:function(t){if(0===t.button)this.toggle(!this.isOn);else if(2===t.button){if(this.group){var i=this.group.every(function(t){return t===this||!t.isOn},this);this.group.forEach(function(t){t!==this&&t.toggle(i)},this)}this.toggle(!0)}}},gsuiSpanEditable.prototype={getValue:function(){return this.value},setValue:function(t){t=t.trim(),t===this.placeholder&&(t=""),this.element.classList.toggle("gs-ui--empty",!t),this.span.textContent=t||this.placeholder,t!==this.value&&(this.value=t,this.data.onchange&&this.data.onchange(this.value))},setPlaceholder:function(t){this.placeholder=t.trim(),this.value||this.setValue(t)},__elementDblclick:function(t){this.input.value=this.value,this.element.classList.add("gs-ui--editing"),this.input.focus(),this.input.select()},__inputBlur:function(t){this.__esc||(this.setValue(t.target.value),this.element.classList.remove("gs-ui--editing")),this.__esc=!1},__inputKeydown:function(t){t.stopPropagation(),13!==t.keyCode&&27!==t.keyCode||(this.__esc=27===t.keyCode,this.__esc||this.setValue(t.target.value),this.element.classList.remove("gs-ui--editing"))}};