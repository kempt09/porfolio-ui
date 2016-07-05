import Ember from 'ember';

export default Ember.Component.extend({
  tagName: "span",
  twitter: false,
  linkedin: false,
  facebook: false,
  github: false,
  instagram: false,

  didReceiveAttrs(){
    this._super(...arguments);
    const user = this.get('user');
    const social = ['twitter', 'facebook', 'linkedin', 'github', 'instagram'];
    if(!user){
      return;
    }

    for(let i = 0; i < social.length; i++){
      if(user.social[i].hasOwnProperty(social[i])){
        if(user.social[i]._link.length > 1){
          this.set(social[i], user.social[i]._link);
        }
      }
    }
  }
});
