const fields = {
  name: {
    en: 'name',
    wo: 'whrascwo',
  },
  height: {
    en: 'height',
    wo: 'acwoahrracao',
    convert: value => {
      return isNaN(parseInt(value)) ? '-' : value;
    }
  },
  mass: {
    en: 'mass',
    wo: 'scracc',
    convert: value => {
      return isNaN(parseInt(value)) ? '-' : value;
    }
  },
  hair_color: {
    en: 'hair_color',
    wo: 'acraahrc_oaooanoorc',
  },
  skin_color: {
    en: 'skin_color',
    wo: 'corahwh_oaooanoorc',
  },
  eye_color: {
    en: 'eye_color',
    wo: 'worowo_oaooanoorc',
    filter: true,
  },
  birth_year: {
    en: 'birth_year',
    wo: 'rhahrcaoac_roworarc',
    tag: 'blue',
  },
  gender: {
    en: 'gender',
    wo: 'rrwowhwaworc',
    tag: {
      male: 'green',
      female: 'violet',
      hermaphrodite: 'yellow',
      scraanwo: 'green',
      wwwoscraanwo: 'violet',
      acworcscraakacrcoowaahaowo: 'yellow',
    }
  }, 
  url: {
    en: 'url',
    wo: 'hurcan',
  }
};

const gender = {
  scraanwo: 'male',
  wwwoscraanwo: 'female',
  acworcscraakacrcoowaahaowo: 'hermaphrodite',
  'wh/ra': 'n/a'
}

const service_fields = {
  next: 'whwokao',
  'null': 'whhuanan',
  results: 'rcwochuanaoc',
}

export const transformCharacter = (lang, swapiCharacter) => {
  const character = Object.entries(fields).reduce((res, [name, field]) => {
    if (field.convert) {
      res[name] = field.convert(swapiCharacter[field[lang]]);
    } else {
      res[name] = swapiCharacter[field[lang]];
    }
    if (field.filter) {
      res.filterField = res[name];
    }
    if (field.tag && res[name]) {
      if (typeof field.tag === 'string') {
        res.tags.push([res[name], field.tag]);
      } else if (field.tag[res[name]]) {
        res.tags.push([res[name], field.tag[res[name]]]);
      }
    }
    return res;
  }, {tags: []});

  const idRegExp = /\/([0-9]*)\/$/;
  character.id = character.url.match(idRegExp)[1];
  return character;
};

export const getServiceFieldName = (lang, fieldName) => {
  return lang === 'en' ? fieldName : service_fields[fieldName];
}

export const getFieldName = (lang, fieldName) => {
  return fields[fieldName][lang].replace('_', ' ');
}

export const getGender = (lang, value) => {
  return lang === 'en' ? value : gender[value];
}