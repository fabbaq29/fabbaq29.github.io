const n={link:/^(https?:|mailto:|\/|#)/i,image:/^(https?:|\/)/i};function s(t,i){return n[i].test(t)?t:i==="link"?"#":null}export{s};
