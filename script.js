function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}


  /* ==========================================================
     CONFIGURATION — modifie ces 2 valeurs
  ========================================================== */
  var TARGET_EMAIL = 'aboudesign0155@gmail.com'; // ton adresse email
 
  var links = [
    { id: 1, net: 'linkedin', url: 'https://www.linkedin.com/in/tonprofil' },
    { id: 2, net: 'whatsapp', url: 'https://wa.me/+000000000000' },
    { id: 3, net: 'github',   url: 'https://github.com/tonprofil' }
  ];
 
  /* ==========================================================
     RESEAUX DISPONIBLES
  ========================================================== */
  var NETS = {
    linkedin: {
      label: 'LinkedIn', ph: 'https://linkedin.com/in/...',
      icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7H10V9h4v2h.1A4.6 4.6 0 0 1 16 8zM2 9h4v12H2zm2-7a2 2 0 1 1 0 4 2 2 0 0 1 0-4z"/></svg>'
    },
    whatsapp: {
      label: 'WhatsApp', ph: 'https://wa.me/+33600000000',
      icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>'
    },
    github: {
      label: 'GitHub', ph: 'https://github.com/...',
      icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>'
    },
    twitter: {
      label: 'Twitter / X', ph: 'https://twitter.com/...',
      icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>'
    },
    instagram: {
      label: 'Instagram', ph: 'https://instagram.com/...',
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>'
    },
    facebook: {
      label: 'Facebook', ph: 'https://facebook.com/...',
      icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>'
    },
    tiktok: {
      label: 'TikTok', ph: 'https://tiktok.com/@...',
      icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.91a8.16 8.16 0 0 0 4.77 1.52V7a4.85 4.85 0 0 1-1-.31z"/></svg>'
    },
    website: {
      label: 'Site web', ph: 'https://monsite.com',
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>'
    }
  };
 
  var nextId = links.length + 1;
 
  /* ==========================================================
     RENDU
  ========================================================== */
  function renderSocials() {
    document.getElementById('cs-socials').innerHTML = links.map(function(l) {
      var n = NETS[l.net] || NETS.website;
      return '<a class="cs-social-card" href="' + l.url + '" target="_blank">'
        + n.icon + '<span>' + n.label + '</span></a>';
    }).join('');
 
    document.getElementById('cs-elist').innerHTML = links.map(function(l) {
      var selOpts = Object.keys(NETS).map(function(k) {
        return '<option value="' + k + '"' + (k === l.net ? ' selected' : '') + '>'
          + NETS[k].label + '</option>';
      }).join('');
      var ph = (NETS[l.net] || NETS.website).ph;
      return '<div class="cs-erow">'
        + '<select onchange="csNet(' + l.id + ',this.value)">' + selOpts + '</select>'
        + '<input value="' + l.url + '" placeholder="' + ph + '" oninput="csUrl(' + l.id + ',this.value)"/>'
        + '<button class="cs-xbtn" onclick="csDel(' + l.id + ')">x</button>'
        + '</div>';
    }).join('');
  }
 
  function csNet(id, val) {
    var l = links.find(function(x) { return x.id === id; });
    if (l) { l.net = val; renderSocials(); }
  }
 
  function csUrl(id, val) {
    var l = links.find(function(x) { return x.id === id; });
    if (l) { l.url = val; renderSocials(); }
  }
 
  function csDel(id) {
    links = links.filter(function(x) { return x.id !== id; });
    renderSocials();
  }
 
  function csAdd() {
    links.push({ id: nextId++, net: 'linkedin', url: '' });
    renderSocials();
    var inputs = document.querySelectorAll('#cs-elist input');
    if (inputs.length) inputs[inputs.length - 1].focus();
  }
 
  /* ==========================================================
     ENVOI DU FORMULAIRE
  ========================================================== */
  function csSend() {
    var name    = document.getElementById('cf-name').value.trim();
    var email   = document.getElementById('cf-email').value.trim();
    var subject = document.getElementById('cf-subject').value.trim();
    var msg     = document.getElementById('cf-msg').value.trim();
    var errEl   = document.getElementById('cs-err');
 
    errEl.style.display = 'none';
 
    if (!name || !email || !msg) {
      errEl.textContent = 'Veuillez remplir les champs obligatoires (nom, email, message).';
      errEl.style.display = 'block';
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errEl.textContent = 'Adresse email invalide.';
      errEl.style.display = 'block';
      return;
    }
 
    var fullSubject = subject || 'Message de ' + name;
    var body = 'Nom: ' + name + '\nEmail: ' + email + '\n\n' + msg;
    var mailto = 'mailto:' + TARGET_EMAIL
      + '?subject=' + encodeURIComponent(fullSubject)
      + '&body='    + encodeURIComponent(body);
 
    window.location.href = mailto;
 
    document.getElementById('cs-form-body').style.display = 'none';
    document.getElementById('cs-success').style.display = 'block';
  }
 
  renderSocials();


