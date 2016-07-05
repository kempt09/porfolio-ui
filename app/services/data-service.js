import Ember from 'ember';

export default Ember.Service.extend({

  fetchAll(file){
    return Ember.$.getJSON(`data/${file}.json`).then((data)=> {
        return data;
    }, (err)=> {
      console.error(err.status);
      console.error(err.statusText);
      console.error(err.responseText);
      console.error(`Please ensure you ${file}.json file is formatted correctly.`);
    });;
  },

  fetchSingle(file, id){
    return Ember.$.getJSON(`data/${file}.json`).then((data)=>{
      let result = data.filter((item)=>{
        return item.id === id;
      });
      return result;
    }, (err)=>{
      console.error(err.status);
      console.error(err.statusText);
      console.error(err.responseText);
      console.error(`Please ensure you ${file}.json file is formatted correctly.`);
      console.error(`Unable to find item with id=${id} in your ${file}.json file.`);
    })
  },

  getData(){
    return Ember.$.getJSON("data/data.json").then((data)=> {
        return data;
    }, (err)=> {
      console.error(err.status);
      console.error(err.statusText);
      console.error(err.responseText);
      console.error("Please ensure you data.json file is formatted correctly.");
    });
  }
});
