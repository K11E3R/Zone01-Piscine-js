function debounce(f, t) 
  let t_out;
  return function() {
    clearTimeout(t_out);
    t_out = setTimeout(() => f.apply(this, arguments), t || 100);
  };
}

function opDebounce(f, w, i) {
  let t_out;
  return function() {
    const c = this, args = arguments, n = i && !t_out;
    clearTimeout(t_out);
    t_out = setTimeout(() => {t_out = null; if (!i) f.apply(c, args);}, w);
    if (n) f.apply(c, args);
  };
}
