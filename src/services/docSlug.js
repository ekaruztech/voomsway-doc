const docSlug = (title) => {

  return title.replace(/\W+/g, '-').toLowerCase();

};

export default docSlug;
