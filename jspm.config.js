SystemJS.config({
  paths: {
    "github:": "jspm_packages/github/",
    "npm:": "jspm_packages/npm/"
  },
  browserConfig: {
    "baseURL": "/"
  },
  map: {
    "Premium": "./assets/lib/Premium/build.js",
    "Andaman": "./assets/lib/andaman/andaman-bundle.js"
  },
  devConfig: {
    "map": {
      "plugin-typescript": "github:frankwallis/plugin-typescript@5.2.7",
      "plugin-babel": "npm:systemjs-plugin-babel@0.0.12",
      "plugin-traceur": "npm:systemjs-plugin-traceur@0.0.2",
      "clean-css": "npm:clean-css@3.4.20"
    },
    "packages": {
      "npm:systemjs-plugin-traceur@0.0.2": {
        "map": {
          "traceur-runtime": "github:jmcriffey/bower-traceur-runtime@0.0.95",
          "traceur": "github:jmcriffey/bower-traceur@0.0.95"
        }
      },
      "npm:source-map@0.4.4": {
        "map": {
          "amdefine": "npm:amdefine@1.0.0"
        }
      },
      "npm:commander@2.8.1": {
        "map": {
          "graceful-readlink": "npm:graceful-readlink@1.0.1"
        }
      },
      "npm:clean-css@3.4.20": {
        "map": {
          "source-map": "npm:source-map@0.4.4",
          "commander": "npm:commander@2.8.1"
        }
      },
      "github:frankwallis/plugin-typescript@5.2.7": {
        "map": {
          "typescript": "npm:typescript@2.0.6"
        }
      }
    }
  },
  transpiler: "plugin-typescript",
  meta: {
    "*.ts": {
      "loader": "plugin-typescript"
    }
  },
  packages: {
    "src": {},
    "src/model": {
      "defaultExtension": "ts",
      "meta": {
        "*.ts": {
          "loader": "plugin-typescript"
        }
      }
    },
    "src/components": {
      "defaultExtension": "ts",
      "map": {
        "./riot-ts": "./riot-ts.ts"
      },
      "meta": {
        "*.ts": {
          "loader": "plugin-typescript"
        }
      }
    },
    "assets/lib": {
      "defaultExtension": "js"
    }
  },
  "npm:buffer@4.9.1": {
    "map": {
      "base64-js": "npm:base64-js@1.2.0",
      "isarray": "npm:isarray@1.0.0",
      "ieee754": "npm:ieee754@1.1.6"
    }
  },
  "npm:stream-http@2.3.1": {
    "map": {
      "inherits": "npm:inherits@2.0.1",
      "xtend": "npm:xtend@4.0.1",
      "readable-stream": "npm:readable-stream@2.1.4",
      "builtin-status-codes": "npm:builtin-status-codes@2.0.0",
      "to-arraybuffer": "npm:to-arraybuffer@1.0.1"
    }
  },
  "github:KevCJones/plugin-scss@0.2.11": {
    "map": {
      "lodash": "npm:lodash@4.14.2",
      "sass.js": "npm:sass.js@0.9.11",
      "postcss": "npm:postcss@5.1.2",
      "autoprefixer": "npm:autoprefixer@6.4.0",
      "reqwest": "github:ded/reqwest@2.0.5",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2"
    }
  },
  "npm:autoprefixer@6.4.0": {
    "map": {
      "caniuse-db": "npm:caniuse-db@1.0.30000519",
      "browserslist": "npm:browserslist@1.3.5",
      "num2fraction": "npm:num2fraction@1.2.2",
      "postcss-value-parser": "npm:postcss-value-parser@3.3.0",
      "normalize-range": "npm:normalize-range@0.1.2"
    }
  },
  "npm:postcss@5.1.2": {
    "map": {
      "caniuse-db": "npm:caniuse-db@1.0.30000539"
    }
  },
  "npm:supports-color@3.1.2": {
    "map": {
      "has-flag": "npm:has-flag@1.0.0"
    }
  },
  "github:jspm/nodelibs-path@0.1.0": {
    "map": {
      "path-browserify": "npm:path-browserify@0.0.0"
    }
  },
  "github:jspm/nodelibs-url@0.1.0": {
    "map": {
      "url": "npm:url@0.10.3"
    }
  },
  "npm:url@0.10.3": {
    "map": {
      "querystring": "npm:querystring@0.2.0",
      "punycode": "npm:punycode@1.3.2"
    }
  },
  "npm:browserslist@1.3.5": {
    "map": {
      "caniuse-db": "npm:caniuse-db@1.0.30000519"
    }
  },
  "npm:riot-router@0.8.0": {
    "map": {
      "extend": "npm:extend@3.0.0",
      "riot": "npm:riot@2.5.0"
    }
  },
  "npm:riot-route@2.5.0": {
    "map": {
      "riot-observable": "npm:riot-observable@2.5.0"
    }
  },
  "npm:shelljs@0.7.3": {
    "map": {
      "rechoir": "npm:rechoir@0.6.2",
      "interpret": "npm:interpret@1.0.1",
      "glob": "npm:glob@7.0.5"
    }
  },
  "npm:minimatch@3.0.3": {
    "map": {
      "brace-expansion": "npm:brace-expansion@1.1.6"
    }
  },
  "npm:kind-of@3.0.4": {
    "map": {
      "is-buffer": "npm:is-buffer@1.1.4"
    }
  },
  "npm:machina@2.0.0": {
    "map": {
      "lodash": "npm:lodash@3.10.1"
    }
  },
  "npm:optionator@0.8.2": {
    "map": {
      "prelude-ls": "npm:prelude-ls@1.1.2",
      "wordwrap": "npm:wordwrap@1.0.0",
      "levn": "npm:levn@0.3.0",
      "deep-is": "npm:deep-is@0.1.3",
      "type-check": "npm:type-check@0.3.2",
      "fast-levenshtein": "npm:fast-levenshtein@2.0.4"
    }
  }
});

SystemJS.config({
  packageConfigPaths: [
    "github:*/*.json",
    "npm:@*/*.json",
    "npm:*.json"
  ],
  map: {
    "assert": "npm:jspm-nodelibs-assert@0.2.0",
    "bcrypt-pbkdf": "npm:bcrypt-pbkdf@1.0.0",
    "big.js": "npm:big.js@3.1.3",
    "bip39": "npm:bip39@2.2.0",
    "bitcoinjs-lib": "npm:bitcoinjs-lib@2.3.0",
    "bowser": "npm:bowser@1.4.6",
    "buffer": "npm:jspm-nodelibs-buffer@0.2.0",
    "child_process": "npm:jspm-nodelibs-child_process@0.2.0",
    "cluster": "npm:jspm-nodelibs-cluster@0.2.0",
    "constants": "npm:jspm-nodelibs-constants@0.2.0",
    "core-js": "npm:core-js@2.4.1",
    "crypto": "npm:jspm-nodelibs-crypto@0.2.0",
    "crypto-js": "npm:crypto-js@3.1.7",
    "css": "github:systemjs/plugin-css@0.1.32",
    "dgram": "npm:jspm-nodelibs-dgram@0.2.0",
    "dns": "npm:jspm-nodelibs-dns@0.2.0",
    "ecc-jsbn": "npm:ecc-jsbn@0.1.1",
    "events": "npm:jspm-nodelibs-events@0.2.0",
    "font-awesome": "npm:font-awesome@4.7.0",
    "fs": "npm:jspm-nodelibs-fs@0.2.0",
    "fsevents": "npm:fsevents@1.0.14",
    "http": "npm:jspm-nodelibs-http@0.2.0",
    "https": "npm:jspm-nodelibs-https@0.2.1",
    "jodid25519": "npm:jodid25519@1.0.2",
    "jquery": "npm:jquery@3.1.1",
    "jsbn": "npm:jsbn@0.1.0",
    "jsdom": "npm:jsdom@7.2.2",
    "machina": "npm:machina@2.0.0",
    "module": "npm:jspm-nodelibs-module@0.2.0",
    "moment": "npm:moment@2.15.2",
    "moment-timezone": "npm:moment-timezone@0.5.7",
    "net": "npm:jspm-nodelibs-net@0.2.0",
    "os": "npm:jspm-nodelibs-os@0.2.0",
    "path": "npm:jspm-nodelibs-path@0.2.1",
    "process": "npm:jspm-nodelibs-process@0.2.0",
    "punycode": "npm:jspm-nodelibs-punycode@0.2.0",
    "querystring": "npm:jspm-nodelibs-querystring@0.2.0",
    "redux": "npm:redux@3.6.0",
    "redux-thunk": "npm:redux-thunk@2.1.0",
    "riot": "npm:riot@2.6.4",
    "riot-router": "npm:riot-router@0.8.1",
    "scss": "github:KevCJones/plugin-scss@0.2.11",
    "secrets.js-grempe": "npm:secrets.js-grempe@1.1.0",
    "source-map": "npm:source-map@0.2.0",
    "stream": "npm:jspm-nodelibs-stream@0.2.0",
    "string_decoder": "npm:jspm-nodelibs-string_decoder@0.2.0",
    "tag": "npm:systemjs-riot@1.4.2",
    "text": "github:systemjs/plugin-text@0.0.8",
    "tls": "npm:jspm-nodelibs-tls@0.2.0",
    "tty": "npm:jspm-nodelibs-tty@0.2.0",
    "tweetnacl": "npm:tweetnacl@0.14.3",
    "tweetnacl-util": "npm:tweetnacl-util@0.13.3",
    "underscore": "npm:underscore@1.8.3",
    "url": "npm:jspm-nodelibs-url@0.2.0",
    "util": "npm:jspm-nodelibs-util@0.2.1",
    "vm": "npm:jspm-nodelibs-vm@0.2.0",
    "zlib": "npm:jspm-nodelibs-zlib@0.2.0"
  },
  packages: {
    "npm:stream-http@2.4.0": {
      "base64-js": "npm:base64-js@1.1.2",
      "process-nextick-args": "npm:process-nextick-args@1.0.7",
      "core-util-is": "npm:core-util-is@1.0.2",
      "string_decoder": "npm:string_decoder@0.10.31",
      "buffer-shims": "npm:buffer-shims@1.0.0",
      "util-deprecate": "npm:util-deprecate@1.0.2",
      "map": {
        "readable-stream": "npm:readable-stream@2.1.5",
        "inherits": "npm:inherits@2.0.3",
        "to-arraybuffer": "npm:to-arraybuffer@1.0.1",
        "builtin-status-codes": "npm:builtin-status-codes@2.0.0",
        "xtend": "npm:xtend@4.0.1"
      }
    },
    "npm:crypto-browserify@3.11.0": {
      "map": {
        "create-ecdh": "npm:create-ecdh@4.0.0",
        "browserify-cipher": "npm:browserify-cipher@1.0.0",
        "inherits": "npm:inherits@2.0.3",
        "pbkdf2": "npm:pbkdf2@3.0.9",
        "create-hash": "npm:create-hash@1.1.2",
        "create-hmac": "npm:create-hmac@1.1.4",
        "browserify-sign": "npm:browserify-sign@4.0.0",
        "diffie-hellman": "npm:diffie-hellman@5.0.2",
        "randombytes": "npm:randombytes@2.0.3",
        "public-encrypt": "npm:public-encrypt@4.0.0"
      }
    },
    "npm:create-hash@1.1.2": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "cipher-base": "npm:cipher-base@1.0.3",
        "ripemd160": "npm:ripemd160@1.0.1",
        "sha.js": "npm:sha.js@2.4.5"
      }
    },
    "npm:browserify-sign@4.0.0": {
      "map": {
        "create-hash": "npm:create-hash@1.1.2",
        "create-hmac": "npm:create-hmac@1.1.4",
        "inherits": "npm:inherits@2.0.3",
        "elliptic": "npm:elliptic@6.3.2",
        "browserify-rsa": "npm:browserify-rsa@4.0.1",
        "bn.js": "npm:bn.js@4.11.6",
        "parse-asn1": "npm:parse-asn1@5.0.0"
      }
    },
    "npm:create-hmac@1.1.4": {
      "map": {
        "create-hash": "npm:create-hash@1.1.2",
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:diffie-hellman@5.0.2": {
      "map": {
        "randombytes": "npm:randombytes@2.0.3",
        "bn.js": "npm:bn.js@4.11.6",
        "miller-rabin": "npm:miller-rabin@4.0.0"
      }
    },
    "npm:public-encrypt@4.0.0": {
      "map": {
        "create-hash": "npm:create-hash@1.1.2",
        "randombytes": "npm:randombytes@2.0.3",
        "browserify-rsa": "npm:browserify-rsa@4.0.1",
        "bn.js": "npm:bn.js@4.11.6",
        "parse-asn1": "npm:parse-asn1@5.0.0"
      }
    },
    "npm:create-ecdh@4.0.0": {
      "map": {
        "elliptic": "npm:elliptic@6.3.2",
        "bn.js": "npm:bn.js@4.11.6"
      }
    },
    "npm:browserify-cipher@1.0.0": {
      "map": {
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
        "browserify-des": "npm:browserify-des@1.0.0",
        "browserify-aes": "npm:browserify-aes@1.0.6"
      }
    },
    "npm:browserify-aes@1.0.6": {
      "map": {
        "create-hash": "npm:create-hash@1.1.2",
        "inherits": "npm:inherits@2.0.3",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
        "cipher-base": "npm:cipher-base@1.0.3",
        "buffer-xor": "npm:buffer-xor@1.0.3"
      }
    },
    "npm:browserify-des@1.0.0": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "cipher-base": "npm:cipher-base@1.0.3",
        "des.js": "npm:des.js@1.0.0"
      }
    },
    "npm:evp_bytestokey@1.0.0": {
      "map": {
        "create-hash": "npm:create-hash@1.1.2"
      }
    },
    "npm:browserify-rsa@4.0.1": {
      "map": {
        "randombytes": "npm:randombytes@2.0.3",
        "bn.js": "npm:bn.js@4.11.6"
      }
    },
    "npm:sha.js@2.4.5": {
      "map": {
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:parse-asn1@5.0.0": {
      "map": {
        "browserify-aes": "npm:browserify-aes@1.0.6",
        "create-hash": "npm:create-hash@1.1.2",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
        "pbkdf2": "npm:pbkdf2@3.0.9",
        "asn1.js": "npm:asn1.js@4.8.1"
      }
    },
    "npm:miller-rabin@4.0.0": {
      "map": {
        "bn.js": "npm:bn.js@4.11.6",
        "brorand": "npm:brorand@1.0.6"
      }
    },
    "npm:des.js@1.0.0": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
      }
    },
    "npm:hash.js@1.0.3": {
      "map": {
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:stream-browserify@2.0.1": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "readable-stream": "npm:readable-stream@2.1.5"
      }
    },
    "npm:chalk@1.1.3": {
      "map": {
        "strip-ansi": "npm:strip-ansi@3.0.1",
        "escape-string-regexp": "npm:escape-string-regexp@1.0.5",
        "supports-color": "npm:supports-color@2.0.0",
        "has-ansi": "npm:has-ansi@2.0.0",
        "ansi-styles": "npm:ansi-styles@2.2.1"
      }
    },
    "npm:glob-parent@2.0.0": {
      "map": {
        "is-glob": "npm:is-glob@2.0.1"
      }
    },
    "npm:type-check@0.3.2": {
      "map": {
        "prelude-ls": "npm:prelude-ls@1.1.2"
      }
    },
    "npm:levn@0.3.0": {
      "map": {
        "prelude-ls": "npm:prelude-ls@1.1.2",
        "type-check": "npm:type-check@0.3.2"
      }
    },
    "npm:strip-ansi@3.0.1": {
      "map": {
        "ansi-regex": "npm:ansi-regex@2.0.0"
      }
    },
    "npm:has-ansi@2.0.0": {
      "map": {
        "ansi-regex": "npm:ansi-regex@2.0.0"
      }
    },
    "npm:is-glob@2.0.1": {
      "map": {
        "is-extglob": "npm:is-extglob@1.0.0"
      }
    },
    "npm:rechoir@0.6.2": {
      "map": {
        "resolve": "npm:resolve@1.1.7"
      }
    },
    "npm:readdirp@2.1.0": {
      "map": {
        "graceful-fs": "npm:graceful-fs@4.1.9",
        "minimatch": "npm:minimatch@3.0.3",
        "readable-stream": "npm:readable-stream@2.1.5",
        "set-immediate-shim": "npm:set-immediate-shim@1.0.1"
      }
    },
    "npm:anymatch@1.3.0": {
      "map": {
        "arrify": "npm:arrify@1.0.1",
        "micromatch": "npm:micromatch@2.3.11"
      }
    },
    "npm:is-binary-path@1.0.1": {
      "map": {
        "binary-extensions": "npm:binary-extensions@1.7.0"
      }
    },
    "npm:once@1.3.3": {
      "map": {
        "wrappy": "npm:wrappy@1.0.2"
      }
    },
    "npm:parse-glob@3.0.4": {
      "map": {
        "is-extglob": "npm:is-extglob@1.0.0",
        "is-glob": "npm:is-glob@2.0.1",
        "glob-base": "npm:glob-base@0.3.0",
        "is-dotfile": "npm:is-dotfile@1.0.2"
      }
    },
    "npm:extglob@0.3.2": {
      "map": {
        "is-extglob": "npm:is-extglob@1.0.0"
      }
    },
    "npm:tar@2.2.1": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "block-stream": "npm:block-stream@0.0.9",
        "fstream": "npm:fstream@1.0.10"
      }
    },
    "npm:glob-base@0.3.0": {
      "map": {
        "glob-parent": "npm:glob-parent@2.0.0",
        "is-glob": "npm:is-glob@2.0.1"
      }
    },
    "npm:braces@1.8.5": {
      "map": {
        "repeat-element": "npm:repeat-element@1.1.2",
        "preserve": "npm:preserve@0.2.0",
        "expand-range": "npm:expand-range@1.8.2"
      }
    },
    "npm:regex-cache@0.4.3": {
      "map": {
        "is-primitive": "npm:is-primitive@2.0.0",
        "is-equal-shallow": "npm:is-equal-shallow@0.1.3"
      }
    },
    "npm:arr-diff@2.0.0": {
      "map": {
        "arr-flatten": "npm:arr-flatten@1.0.1"
      }
    },
    "npm:expand-brackets@0.1.5": {
      "map": {
        "is-posix-bracket": "npm:is-posix-bracket@0.1.1"
      }
    },
    "npm:object.omit@2.0.0": {
      "map": {
        "is-extendable": "npm:is-extendable@0.1.1",
        "for-own": "npm:for-own@0.1.4"
      }
    },
    "npm:nopt@3.0.6": {
      "map": {
        "abbrev": "npm:abbrev@1.0.9"
      }
    },
    "npm:block-stream@0.0.9": {
      "map": {
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:mkdirp@0.5.1": {
      "map": {
        "minimist": "npm:minimist@0.0.8"
      }
    },
    "npm:rc@1.1.6": {
      "map": {
        "minimist": "npm:minimist@1.2.0",
        "deep-extend": "npm:deep-extend@0.4.1",
        "ini": "npm:ini@1.3.4",
        "strip-json-comments": "npm:strip-json-comments@1.0.4"
      }
    },
    "npm:is-equal-shallow@0.1.3": {
      "map": {
        "is-primitive": "npm:is-primitive@2.0.0"
      }
    },
    "npm:are-we-there-yet@1.1.2": {
      "map": {
        "readable-stream": "npm:readable-stream@1.1.14",
        "delegates": "npm:delegates@1.0.0"
      }
    },
    "npm:readable-stream@1.1.14": {
      "map": {
        "isarray": "npm:isarray@0.0.1",
        "core-util-is": "npm:core-util-is@1.0.2",
        "inherits": "npm:inherits@2.0.3",
        "string_decoder": "npm:string_decoder@0.10.31",
        "stream-browserify": "npm:stream-browserify@1.0.0"
      }
    },
    "npm:gauge@2.6.0": {
      "map": {
        "console-control-strings": "npm:console-control-strings@1.1.0",
        "strip-ansi": "npm:strip-ansi@3.0.1",
        "object-assign": "npm:object-assign@4.1.0",
        "has-color": "npm:has-color@0.1.7",
        "string-width": "npm:string-width@1.0.2",
        "aproba": "npm:aproba@1.0.4",
        "has-unicode": "npm:has-unicode@2.0.1",
        "wide-align": "npm:wide-align@1.1.0",
        "signal-exit": "npm:signal-exit@3.0.1"
      }
    },
    "npm:fstream@1.0.10": {
      "map": {
        "graceful-fs": "npm:graceful-fs@4.1.9",
        "inherits": "npm:inherits@2.0.3",
        "mkdirp": "npm:mkdirp@0.5.1",
        "rimraf": "npm:rimraf@2.5.4"
      }
    },
    "npm:fstream-ignore@1.0.5": {
      "map": {
        "fstream": "npm:fstream@1.0.10",
        "inherits": "npm:inherits@2.0.3",
        "minimatch": "npm:minimatch@3.0.3"
      }
    },
    "npm:har-validator@2.0.6": {
      "map": {
        "chalk": "npm:chalk@1.1.3",
        "is-my-json-valid": "npm:is-my-json-valid@2.15.0",
        "pinkie-promise": "npm:pinkie-promise@2.0.1",
        "commander": "npm:commander@2.9.0"
      }
    },
    "npm:http-signature@1.1.1": {
      "map": {
        "jsprim": "npm:jsprim@1.3.1",
        "assert-plus": "npm:assert-plus@0.2.0",
        "sshpk": "npm:sshpk@1.10.1"
      }
    },
    "npm:expand-range@1.8.2": {
      "map": {
        "fill-range": "npm:fill-range@2.2.3"
      }
    },
    "npm:fill-range@2.2.3": {
      "map": {
        "repeat-element": "npm:repeat-element@1.1.2",
        "is-number": "npm:is-number@2.1.0",
        "randomatic": "npm:randomatic@1.1.5",
        "isobject": "npm:isobject@2.1.0",
        "repeat-string": "npm:repeat-string@1.6.1"
      }
    },
    "npm:for-own@0.1.4": {
      "map": {
        "for-in": "npm:for-in@0.1.6"
      }
    },
    "npm:stream-browserify@1.0.0": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "readable-stream": "npm:readable-stream@1.1.14"
      }
    },
    "npm:debug@2.2.0": {
      "map": {
        "ms": "npm:ms@0.7.1"
      }
    },
    "npm:hawk@3.1.3": {
      "map": {
        "hoek": "npm:hoek@2.16.3",
        "cryptiles": "npm:cryptiles@2.0.5",
        "sntp": "npm:sntp@1.0.9",
        "boom": "npm:boom@2.10.1"
      }
    },
    "npm:wide-align@1.1.0": {
      "map": {
        "string-width": "npm:string-width@1.0.2"
      }
    },
    "npm:combined-stream@1.0.5": {
      "map": {
        "delayed-stream": "npm:delayed-stream@1.0.0"
      }
    },
    "npm:sntp@1.0.9": {
      "map": {
        "hoek": "npm:hoek@2.16.3"
      }
    },
    "npm:cryptiles@2.0.5": {
      "map": {
        "boom": "npm:boom@2.10.1"
      }
    },
    "npm:boom@2.10.1": {
      "map": {
        "hoek": "npm:hoek@2.16.3"
      }
    },
    "npm:ecc-jsbn@0.1.1": {
      "map": {
        "jsbn": "npm:jsbn@0.1.0"
      }
    },
    "npm:is-number@2.1.0": {
      "map": {
        "kind-of": "npm:kind-of@3.0.4"
      }
    },
    "npm:verror@1.3.6": {
      "map": {
        "extsprintf": "npm:extsprintf@1.0.2"
      }
    },
    "npm:getpass@0.1.6": {
      "map": {
        "assert-plus": "npm:assert-plus@1.0.0"
      }
    },
    "npm:dashdash@1.14.0": {
      "map": {
        "assert-plus": "npm:assert-plus@1.0.0"
      }
    },
    "npm:randomatic@1.1.5": {
      "map": {
        "is-number": "npm:is-number@2.1.0",
        "kind-of": "npm:kind-of@3.0.4"
      }
    },
    "npm:jodid25519@1.0.2": {
      "map": {
        "jsbn": "npm:jsbn@0.1.0"
      }
    },
    "npm:isobject@2.1.0": {
      "map": {
        "isarray": "npm:isarray@1.0.0"
      }
    },
    "npm:browserify-zlib@0.1.4": {
      "map": {
        "readable-stream": "npm:readable-stream@2.1.5",
        "pako": "npm:pako@0.2.9"
      }
    },
    "npm:pinkie-promise@2.0.1": {
      "map": {
        "pinkie": "npm:pinkie@2.0.4"
      }
    },
    "npm:commander@2.9.0": {
      "map": {
        "graceful-readlink": "npm:graceful-readlink@1.0.1"
      }
    },
    "npm:is-fullwidth-code-point@1.0.0": {
      "map": {
        "number-is-nan": "npm:number-is-nan@1.0.1"
      }
    },
    "npm:url@0.11.0": {
      "map": {
        "punycode": "npm:punycode@1.3.2",
        "querystring": "npm:querystring@0.2.0"
      }
    },
    "npm:generate-object-property@1.2.0": {
      "map": {
        "is-property": "npm:is-property@1.0.2"
      }
    },
    "npm:loose-envify@1.2.0": {
      "map": {
        "js-tokens": "npm:js-tokens@1.0.3"
      }
    },
    "npm:micromatch@2.3.11": {
      "map": {
        "is-glob": "npm:is-glob@2.0.1",
        "filename-regex": "npm:filename-regex@2.0.0",
        "braces": "npm:braces@1.8.5",
        "array-unique": "npm:array-unique@0.2.1",
        "parse-glob": "npm:parse-glob@3.0.4",
        "is-extglob": "npm:is-extglob@1.0.0",
        "expand-brackets": "npm:expand-brackets@0.1.5",
        "arr-diff": "npm:arr-diff@2.0.0",
        "kind-of": "npm:kind-of@3.0.4",
        "object.omit": "npm:object.omit@2.0.0",
        "extglob": "npm:extglob@0.3.2",
        "normalize-path": "npm:normalize-path@2.0.1",
        "regex-cache": "npm:regex-cache@0.4.3"
      }
    },
    "npm:rimraf@2.5.4": {
      "map": {
        "glob": "npm:glob@7.1.1"
      }
    },
    "npm:brace-expansion@1.1.6": {
      "map": {
        "concat-map": "npm:concat-map@0.0.1",
        "balanced-match": "npm:balanced-match@0.4.2"
      }
    },
    "npm:jsdom@7.2.2": {
      "map": {
        "abab": "npm:abab@1.0.3",
        "nwmatcher": "npm:nwmatcher@1.3.9",
        "escodegen": "npm:escodegen@1.8.1",
        "parse5": "npm:parse5@1.5.1",
        "symbol-tree": "npm:symbol-tree@3.1.4",
        "sax": "npm:sax@1.2.1",
        "whatwg-url-compat": "npm:whatwg-url-compat@0.6.5",
        "xml-name-validator": "npm:xml-name-validator@2.0.1",
        "cssom": "npm:cssom@0.3.1",
        "webidl-conversions": "npm:webidl-conversions@2.0.1",
        "tough-cookie": "npm:tough-cookie@2.3.2",
        "acorn": "npm:acorn@2.7.0",
        "acorn-globals": "npm:acorn-globals@1.0.9",
        "request": "npm:request@2.76.0",
        "cssstyle": "npm:cssstyle@0.2.37"
      }
    },
    "npm:acorn-globals@1.0.9": {
      "map": {
        "acorn": "npm:acorn@2.7.0"
      }
    },
    "npm:escodegen@1.8.1": {
      "map": {
        "esutils": "npm:esutils@2.0.2",
        "estraverse": "npm:estraverse@1.9.3",
        "esprima": "npm:esprima@2.7.3",
        "optionator": "npm:optionator@0.8.2"
      }
    },
    "npm:whatwg-url-compat@0.6.5": {
      "map": {
        "tr46": "npm:tr46@0.0.3"
      }
    },
    "npm:source-map@0.2.0": {
      "map": {
        "amdefine": "npm:amdefine@1.0.0"
      }
    },
    "github:KevCJones/plugin-scss@0.2.11": {
      "map": {
        "lodash": "npm:lodash@4.16.4",
        "sass.js": "npm:sass.js@0.9.13",
        "postcss": "npm:postcss@5.2.5",
        "autoprefixer": "npm:autoprefixer@6.5.1",
        "reqwest": "github:ded/reqwest@2.0.5",
        "path": "github:jspm/nodelibs-path@0.1.0",
        "url": "github:jspm/nodelibs-url@0.1.0",
        "fs": "github:jspm/nodelibs-fs@0.1.2"
      }
    },
    "npm:supports-color@3.1.2": {
      "map": {
        "has-flag": "npm:has-flag@1.0.0"
      }
    },
    "npm:riot-route@2.5.0": {
      "map": {
        "riot-observable": "npm:riot-observable@2.5.0"
      }
    },
    "npm:minimatch@3.0.3": {
      "map": {
        "brace-expansion": "npm:brace-expansion@1.1.6"
      }
    },
    "npm:kind-of@3.0.4": {
      "map": {
        "is-buffer": "npm:is-buffer@1.1.4"
      }
    },
    "npm:machina@2.0.0": {
      "map": {
        "lodash": "npm:lodash@3.10.1"
      }
    },
    "npm:optionator@0.8.2": {
      "map": {
        "prelude-ls": "npm:prelude-ls@1.1.2",
        "type-check": "npm:type-check@0.3.2",
        "levn": "npm:levn@0.3.0",
        "wordwrap": "npm:wordwrap@1.0.0",
        "deep-is": "npm:deep-is@0.1.3",
        "fast-levenshtein": "npm:fast-levenshtein@2.0.5"
      }
    },
    "npm:shelljs@0.7.4": {
      "map": {
        "glob": "npm:glob@7.1.1",
        "interpret": "npm:interpret@1.0.1",
        "rechoir": "npm:rechoir@0.6.2"
      }
    },
    "npm:riot-router@0.8.1": {
      "map": {
        "riot": "npm:riot@2.6.4",
        "extend": "npm:extend@3.0.0"
      }
    },
    "npm:redux@3.6.0": {
      "map": {
        "symbol-observable": "npm:symbol-observable@1.0.4",
        "loose-envify": "npm:loose-envify@1.2.0",
        "lodash-es": "npm:lodash-es@4.16.4",
        "lodash": "npm:lodash@4.16.4"
      }
    },
    "npm:fsevents@1.0.14": {
      "map": {
        "nan": "npm:nan@2.4.0",
        "node-pre-gyp": "npm:node-pre-gyp@0.6.31"
      }
    },
    "npm:systemjs-riot@1.4.2": {
      "map": {
        "riot-compiler": "npm:riot-compiler@2.5.5"
      }
    },
    "npm:cssstyle@0.2.37": {
      "map": {
        "cssom": "npm:cssom@0.3.1"
      }
    },
    "npm:npmlog@4.0.0": {
      "map": {
        "set-blocking": "npm:set-blocking@2.0.0",
        "are-we-there-yet": "npm:are-we-there-yet@1.1.2",
        "console-control-strings": "npm:console-control-strings@1.1.0",
        "gauge": "npm:gauge@2.6.0"
      }
    },
    "npm:mime-types@2.1.12": {
      "map": {
        "mime-db": "npm:mime-db@1.24.0"
      }
    },
    "npm:buffer@4.9.1": {
      "map": {
        "base64-js": "npm:base64-js@1.2.0",
        "isarray": "npm:isarray@1.0.0",
        "ieee754": "npm:ieee754@1.1.8"
      }
    },
    "npm:readable-stream@2.1.5": {
      "map": {
        "isarray": "npm:isarray@1.0.0",
        "string_decoder": "npm:string_decoder@0.10.31",
        "inherits": "npm:inherits@2.0.3",
        "buffer-shims": "npm:buffer-shims@1.0.0",
        "process-nextick-args": "npm:process-nextick-args@1.0.7",
        "util-deprecate": "npm:util-deprecate@1.0.2",
        "core-util-is": "npm:core-util-is@1.0.2"
      }
    },
    "npm:jsprim@1.3.1": {
      "map": {
        "json-schema": "npm:json-schema@0.2.3",
        "verror": "npm:verror@1.3.6",
        "extsprintf": "npm:extsprintf@1.0.2"
      }
    },
    "npm:once@1.4.0": {
      "map": {
        "wrappy": "npm:wrappy@1.0.2"
      }
    },
    "npm:bcrypt-pbkdf@1.0.0": {
      "map": {
        "tweetnacl": "npm:tweetnacl@0.14.3"
      }
    },
    "npm:cipher-base@1.0.3": {
      "map": {
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:elliptic@6.3.2": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "bn.js": "npm:bn.js@4.11.6",
        "brorand": "npm:brorand@1.0.6",
        "hash.js": "npm:hash.js@1.0.3"
      }
    },
    "npm:string-width@1.0.2": {
      "map": {
        "strip-ansi": "npm:strip-ansi@3.0.1",
        "is-fullwidth-code-point": "npm:is-fullwidth-code-point@1.0.0",
        "code-point-at": "npm:code-point-at@1.0.1"
      }
    },
    "npm:asn1.js@4.8.1": {
      "map": {
        "bn.js": "npm:bn.js@4.11.6",
        "inherits": "npm:inherits@2.0.3",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
      }
    },
    "npm:is-my-json-valid@2.15.0": {
      "map": {
        "xtend": "npm:xtend@4.0.1",
        "jsonpointer": "npm:jsonpointer@4.0.0",
        "generate-function": "npm:generate-function@2.0.0",
        "generate-object-property": "npm:generate-object-property@1.2.0"
      }
    },
    "npm:sshpk@1.10.1": {
      "map": {
        "assert-plus": "npm:assert-plus@1.0.0",
        "asn1": "npm:asn1@0.2.3",
        "getpass": "npm:getpass@0.1.6",
        "dashdash": "npm:dashdash@1.14.0"
      }
    },
    "npm:browserslist@1.4.0": {
      "map": {
        "caniuse-db": "npm:caniuse-db@1.0.30000568"
      }
    },
    "npm:code-point-at@1.0.1": {
      "map": {
        "number-is-nan": "npm:number-is-nan@1.0.1"
      }
    },
    "npm:glob@7.1.1": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "once": "npm:once@1.4.0",
        "path-is-absolute": "npm:path-is-absolute@1.0.1",
        "fs.realpath": "npm:fs.realpath@1.0.0",
        "minimatch": "npm:minimatch@3.0.3",
        "inflight": "npm:inflight@1.0.6"
      }
    },
    "npm:pbkdf2@3.0.9": {
      "map": {
        "create-hmac": "npm:create-hmac@1.1.4"
      }
    },
    "npm:bitcoinjs-lib@2.3.0": {
      "map": {
        "create-hash": "npm:create-hash@1.1.2",
        "randombytes": "npm:randombytes@2.0.3",
        "create-hmac": "npm:create-hmac@1.1.4",
        "buffer-compare": "npm:buffer-compare@1.1.1",
        "buffer-equals": "npm:buffer-equals@1.0.4",
        "buffer-reverse": "npm:buffer-reverse@1.0.1",
        "wif": "npm:wif@2.0.1",
        "bs58check": "npm:bs58check@1.0.8",
        "bigi": "npm:bigi@1.4.2",
        "bip66": "npm:bip66@1.1.4",
        "ecurve": "npm:ecurve@1.0.4",
        "typeforce": "npm:typeforce@1.8.7"
      }
    },
    "npm:bs58check@1.0.8": {
      "map": {
        "create-hash": "npm:create-hash@1.1.2",
        "bs58": "npm:bs58@2.0.1"
      }
    },
    "npm:wif@2.0.1": {
      "map": {
        "bs58check": "npm:bs58check@1.0.8"
      }
    },
    "npm:typeforce@1.8.7": {
      "map": {
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:bip39@2.2.0": {
      "map": {
        "unorm": "npm:unorm@1.4.1",
        "randombytes": "npm:randombytes@2.0.3",
        "pbkdf2": "npm:pbkdf2@3.0.9",
        "create-hash": "npm:create-hash@1.1.2"
      }
    },
    "npm:riot-cli@2.6.2": {
      "map": {
        "riot-compiler": "npm:riot-compiler@2.5.5",
        "chokidar": "npm:chokidar@1.6.1",
        "co": "npm:co@4.6.0",
        "optionator": "npm:optionator@0.8.2",
        "shelljs": "npm:shelljs@0.7.4",
        "chalk": "npm:chalk@1.1.3",
        "rollup": "npm:rollup@0.36.3"
      }
    },
    "npm:rollup@0.36.3": {
      "map": {
        "source-map-support": "npm:source-map-support@0.4.5"
      }
    },
    "npm:autoprefixer@6.5.1": {
      "map": {
        "postcss": "npm:postcss@5.2.5",
        "browserslist": "npm:browserslist@1.4.0",
        "normalize-range": "npm:normalize-range@0.1.2",
        "num2fraction": "npm:num2fraction@1.2.2",
        "caniuse-db": "npm:caniuse-db@1.0.30000568",
        "postcss-value-parser": "npm:postcss-value-parser@3.3.0"
      }
    },
    "npm:riot@2.6.4": {
      "map": {
        "simple-html-tokenizer": "npm:simple-html-tokenizer@0.2.5",
        "riot-cli": "npm:riot-cli@2.6.2",
        "riot-compiler": "npm:riot-compiler@2.5.5",
        "riot-route": "npm:riot-route@2.5.0",
        "riot-observable": "npm:riot-observable@2.5.0",
        "riot-tmpl": "npm:riot-tmpl@2.4.2",
        "simple-dom": "npm:simple-dom@0.3.2"
      }
    },
    "npm:chokidar@1.6.1": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "is-binary-path": "npm:is-binary-path@1.0.1",
        "glob-parent": "npm:glob-parent@2.0.0",
        "path-is-absolute": "npm:path-is-absolute@1.0.1",
        "async-each": "npm:async-each@1.0.1",
        "readdirp": "npm:readdirp@2.1.0",
        "is-glob": "npm:is-glob@2.0.1",
        "anymatch": "npm:anymatch@1.3.0"
      }
    },
    "npm:inflight@1.0.6": {
      "map": {
        "wrappy": "npm:wrappy@1.0.2",
        "once": "npm:once@1.4.0"
      }
    },
    "npm:source-map-support@0.4.5": {
      "map": {
        "source-map": "npm:source-map@0.5.6"
      }
    },
    "npm:moment-timezone@0.5.7": {
      "map": {
        "moment": "npm:moment@2.15.2"
      }
    },
    "npm:font-awesome@4.7.0": {
      "map": {
        "css": "github:systemjs/plugin-css@0.1.32"
      }
    },
    "npm:request@2.76.0": {
      "map": {
        "extend": "npm:extend@3.0.0",
        "tough-cookie": "npm:tough-cookie@2.3.2",
        "qs": "npm:qs@6.3.0",
        "json-stringify-safe": "npm:json-stringify-safe@5.0.1",
        "har-validator": "npm:har-validator@2.0.6",
        "http-signature": "npm:http-signature@1.1.1",
        "combined-stream": "npm:combined-stream@1.0.5",
        "forever-agent": "npm:forever-agent@0.6.1",
        "stringstream": "npm:stringstream@0.0.5",
        "tunnel-agent": "npm:tunnel-agent@0.4.3",
        "aws4": "npm:aws4@1.5.0",
        "hawk": "npm:hawk@3.1.3",
        "aws-sign2": "npm:aws-sign2@0.6.0",
        "caseless": "npm:caseless@0.11.0",
        "mime-types": "npm:mime-types@2.1.12",
        "oauth-sign": "npm:oauth-sign@0.8.2",
        "is-typedarray": "npm:is-typedarray@1.0.0",
        "node-uuid": "npm:node-uuid@1.4.7",
        "isstream": "npm:isstream@0.1.2",
        "form-data": "npm:form-data@2.1.1"
      }
    },
    "npm:ecurve@1.0.4": {
      "map": {
        "bigi": "npm:bigi@1.4.2"
      }
    },
    "npm:node-pre-gyp@0.6.31": {
      "map": {
        "request": "npm:request@2.76.0",
        "tar-pack": "npm:tar-pack@3.3.0",
        "rimraf": "npm:rimraf@2.5.4",
        "npmlog": "npm:npmlog@4.0.0",
        "tar": "npm:tar@2.2.1",
        "semver": "npm:semver@5.3.0",
        "nopt": "npm:nopt@3.0.6",
        "mkdirp": "npm:mkdirp@0.5.1",
        "rc": "npm:rc@1.1.6"
      }
    },
    "npm:tough-cookie@2.3.2": {
      "map": {
        "punycode": "npm:punycode@1.4.1"
      }
    },
    "npm:tar-pack@3.3.0": {
      "map": {
        "rimraf": "npm:rimraf@2.5.4",
        "tar": "npm:tar@2.2.1",
        "debug": "npm:debug@2.2.0",
        "fstream-ignore": "npm:fstream-ignore@1.0.5",
        "once": "npm:once@1.3.3",
        "uid-number": "npm:uid-number@0.0.6",
        "fstream": "npm:fstream@1.0.10",
        "readable-stream": "npm:readable-stream@2.1.5"
      }
    },
    "npm:postcss@5.2.5": {
      "map": {
        "source-map": "npm:source-map@0.5.6",
        "chalk": "npm:chalk@1.1.3",
        "js-base64": "npm:js-base64@2.1.9",
        "supports-color": "npm:supports-color@3.1.2"
      }
    },
    "npm:form-data@2.1.1": {
      "map": {
        "combined-stream": "npm:combined-stream@1.0.5",
        "mime-types": "npm:mime-types@2.1.12",
        "asynckit": "npm:asynckit@0.4.0"
      }
    },
    "npm:jspm-nodelibs-http@0.2.0": {
      "map": {
        "http-browserify": "npm:stream-http@2.4.0"
      }
    },
    "npm:jspm-nodelibs-zlib@0.2.0": {
      "map": {
        "zlib-browserify": "npm:browserify-zlib@0.1.4"
      }
    },
    "npm:jspm-nodelibs-punycode@0.2.0": {
      "map": {
        "punycode-browserify": "npm:punycode@1.4.1"
      }
    },
    "npm:jspm-nodelibs-url@0.2.0": {
      "map": {
        "url-browserify": "npm:url@0.11.0"
      }
    },
    "npm:jspm-nodelibs-buffer@0.2.0": {
      "map": {
        "buffer-browserify": "npm:buffer@4.9.1"
      }
    },
    "npm:jspm-nodelibs-stream@0.2.0": {
      "map": {
        "stream-browserify": "npm:stream-browserify@2.0.1"
      }
    },
    "npm:jspm-nodelibs-crypto@0.2.0": {
      "map": {
        "crypto-browserify": "npm:crypto-browserify@3.11.0"
      }
    },
    "npm:jspm-nodelibs-string_decoder@0.2.0": {
      "map": {
        "string_decoder-browserify": "npm:string_decoder@0.10.31"
      }
    },
    "npm:jspm-nodelibs-os@0.2.0": {
      "map": {
        "os-browserify": "npm:os-browserify@0.2.1"
      }
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "map": {
        "path-browserify": "npm:path-browserify@0.0.0"
      }
    },
    "github:jspm/nodelibs-url@0.1.0": {
      "map": {
        "url": "npm:url@0.10.3"
      }
    },
    "npm:url@0.10.3": {
      "map": {
        "punycode": "npm:punycode@1.3.2",
        "querystring": "npm:querystring@0.2.0"
      }
    }
  }
});
