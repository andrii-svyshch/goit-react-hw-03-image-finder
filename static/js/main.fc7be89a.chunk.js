(this["webpackJsonpreact-test-repository"]=this["webpackJsonpreact-test-repository"]||[]).push([[0],{18:function(t,e,a){t.exports={overlay:"Modal_overlay__3KmN1",modal:"Modal_modal___lqhi"}},24:function(t,e,a){t.exports={searchbar:"Searchbar_searchbar__24TNH"}},25:function(t,e,a){t.exports={gallery:"ImageGallery_gallery__3J4VI"}},26:function(t,e,a){t.exports={item:"ImageGalleryItem_item__2gVqr"}},27:function(t,e,a){t.exports={button:"Button_button__2etG6"}},63:function(t,e,a){},64:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),o=a(3),s=a.n(o),i=a(4),c=a(5),u=a(7),l=a(6),p=a(23),h=a(8),d=(a(42),a(12)),m=a.n(d),b=a(24),j=a.n(b),g=a(9),f=a.n(g),v=a(1),O=function(t){Object(u.a)(a,t);var e=Object(l.a)(a);function a(){var t;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))).state={pictureName:""},t.handleNameChange=function(e){t.setState({pictureName:e.currentTarget.value.toLowerCase()})},t.handleSubmit=function(e){if(e.preventDefault(),""===t.state.pictureName.trim())return h.b.error("What are you looking for?");t.props.onSubmit(t.state.pictureName),t.setState({pictureName:""})},t}return Object(c.a)(a,[{key:"render",value:function(){var t=this.state.pictureName;return Object(v.jsxs)("form",{className:f.a.form,onSubmit:this.handleSubmit,children:[Object(v.jsx)("button",{type:"submit",className:f.a.button,children:Object(v.jsx)("span",{className:f.a.buttonLabel,children:"Search"})}),Object(v.jsx)("input",{className:f.a.input,type:"text",autoComplete:"off",autoFocus:!0,value:t,placeholder:"Search images and photos",onChange:this.handleNameChange})]})}}]),a}(n.Component);function y(t){var e=t.onSubmit;return Object(v.jsx)("header",{className:j.a.searchbar,children:Object(v.jsx)(O,{onSubmit:e})})}var S=a(19),x=a(25),_=a.n(x),N=a(26),k=a.n(N);function w(t){var e=t.pictures,a=t.onClick;return Object(v.jsx)(v.Fragment,{children:e.map((function(t){var e=t.id,n=t.webformatURL;return Object(v.jsx)("li",{className:k.a.item,children:Object(v.jsx)("img",{id:e,src:n,alt:"",onClick:a})},e)}))})}a(62);function C(t,e){return fetch("".concat("https://pixabay.com/api","/?q=").concat(t,"&page=").concat(e,"&key=").concat("23541040-6cd4bf6b7c4617c11fc95022a","&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.ok?e.json():Promise.reject(new Error("There are no images ".concat(t)))}))}var M=function(t){Object(u.a)(a,t);var e=Object(l.a)(a);function a(){var t;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))).state={pictures:null,status:"idle"},t.handleImageClick=function(e){var a=t.state.pictures.find((function(t){return t.id===Number(e.currentTarget.id)}));a&&(t.props.toggleModal(),t.props.setModalImage(a.largeImageURL))},t}return Object(c.a)(a,[{key:"componentDidUpdate",value:function(t,e){var a=this,n=t.pictureName,r=this.props.pictureName,o=t.page,s=this.props.page;n!==r&&(this.setState({status:"pending"}),C(r,1).then((function(t){a.setState({pictures:t.hits,status:"resolved"}),a.props.setStatus(a.state.status)})).catch((function(t){a.setState({error:t,status:"rejected"}),a.props.setStatus(a.state.status),h.b.error(t.message)}))),o!==s&&C(r,this.props.page).then((function(t){a.setState({pictures:[].concat(Object(S.a)(e.pictures),Object(S.a)(t.hits)),status:"resolved"}),a.props.setStatus(a.state.status)})).catch((function(t){a.setState({error:t,status:"rejected"}),a.props.setStatus(a.state.status)}))}},{key:"render",value:function(){var t=this.state,e=t.pictures,a=t.status;return"idle"===a?Object(v.jsx)("div",{}):"pending"===a?Object(v.jsx)(m.a,{type:"ThreeDots",color:"#3f51b5",height:50,width:80,timeout:3e3}):"rejected"===a?Object(v.jsx)("p",{children:"What are you looking for?"}):"resolved"===a?Object(v.jsx)("ul",{className:_.a.gallery,children:Object(v.jsx)(w,{pictures:e,onClick:this.handleImageClick})}):void 0}}]),a}(n.Component),L=a(27),I=a.n(L);function T(t){var e=t.onClick;return Object(v.jsx)("button",{type:"button",className:I.a.button,onClick:e,children:"Load more"})}var U=a(18),D=a.n(U),F=document.querySelector("#modal-root"),P=function(t){Object(u.a)(a,t);var e=Object(l.a)(a);function a(){var t;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))).handleKeyDown=function(e){"Escape"===e.code&&t.props.onClose()},t.handleBackdropClick=function(e){e.currentTarget===e.target&&t.props.onClose()},t}return Object(c.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){return Object(o.createPortal)(Object(v.jsx)("div",{className:D.a.overlay,onClick:this.handleBackdropClick,children:Object(v.jsx)("div",{className:D.a.modal,children:this.props.children})}),F)}}]),a}(n.Component),R=function(t){Object(u.a)(a,t);var e=Object(l.a)(a);function a(){var t;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))).state={showModal:t.props.initialShowModal,pictureName:t.props.initialPictureName,largeImageURL:t.props.initialLargeImageURL,page:t.props.initialPage,status:t.props.initialStatus},t.onLoadMore=function(){var e=t.state.page;t.setState({page:e+1,status:"pending"}),setTimeout((function(){p.animateScroll.scrollToBottom()}),700)},t.toggleModal=function(){t.setState((function(t){return{showModal:!t.showModal}}))},t.setModalImage=function(e){t.setState({largeImageURL:e})},t.handleFormSubmit=function(e){t.setState({pictureName:e})},t.setStatus=function(e){return t.setState({status:e})},t}return Object(c.a)(a,[{key:"render",value:function(){var t=this.state,e=t.pictureName,a=t.showModal,n=t.largeImageURL,r=t.page,o=t.status;return Object(v.jsxs)("div",{children:[Object(v.jsx)(y,{onSubmit:this.handleFormSubmit}),Object(v.jsx)(h.a,{autoClose:2e3}),Object(v.jsx)(M,{pictureName:e,toggleModal:this.toggleModal,setModalImage:this.setModalImage,page:r,setStatus:this.setStatus}),"pending"===o&&Object(v.jsx)(m.a,{type:"ThreeDots",color:"#3f51b5",height:50,width:80,timeout:3e3}),"resolved"===o&&Object(v.jsx)(T,{onClick:this.onLoadMore}),a&&Object(v.jsx)(P,{onClose:this.toggleModal,children:Object(v.jsx)("img",{src:n,alt:""})})]})}}]),a}(n.Component);R.defaultProps={initialShowModal:!1,initialPictureName:"",initialLargeImageURL:"",initialPage:1,initialStatus:"idle"};var q=R;a(63);s.a.render(Object(v.jsx)(r.a.StrictMode,{children:Object(v.jsx)(q,{})}),document.getElementById("root"))},9:function(t,e,a){t.exports={form:"SearchForm_form__3LbI5",button:"SearchForm_button__iHWeW",buttonLabel:"SearchForm_buttonLabel__HqoOK",input:"SearchForm_input__3-n0P"}}},[[64,1,2]]]);
//# sourceMappingURL=main.fc7be89a.chunk.js.map