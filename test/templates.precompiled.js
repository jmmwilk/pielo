(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['log-out-link'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<a id=\"log-out-link\" class=\"text-secondary align-self-end\" type=\"button\">Wyloguj</a>";
},"useData":true});
templates['main'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div id=\"main\" class=\"col-md-10 order-1 mx-auto pt-3\">\n</div>";
},"useData":true});
templates['page'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div id=\"page\" class=\"row d-flex justify-content-md-center bg-light\">\n</div>\n";
},"useData":true});
templates['title-bar'] = template({"1":function(container,depth0,helpers,partials,data) {
    return "    <div id=\"favourites-icon-box\" class=\"mx-2\">\n      <button id=\"heart-button\" class=\"btn\">\n        <img src=\"/images/heart-red-filled.png\" id=\"heart-icon\">\n      </button>\n    </div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div id=\"title-bar\" class=\"d-flex justify-content-between order-1 align-items-center border-bottom sticky-top bg-light p-2\">\n  <div id=\"home\" type=\"button\" class=\"mx-2\">\n    <img id=\"home-icon\" src=\"/images/home.png\"/>\n  </div>\n  <div id=\"user-box\" class=\"row mx-4\">\n"
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"normal-user") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":6,"column":4},"end":{"line":12,"column":11}}})) != null ? stack1 : "")
    + "    <div id=\"user-name-box\" class=\"text-end\">\n    </div>\n    <div id=\"login-icon-box\" type=\"button\" class=\"mx-2\">\n      <img id=\"login-icon\" src=\"/images/login-icon.png\"/>\n    </div>\n    <div id=\"log-out-box\" class=\"d-flex\">\n    </div>\n  </div>\n</div>\n";
},"useData":true});
templates['nav'] = template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <li class=\"nav-item\">\n      <a id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":8,"column":13},"end":{"line":8,"column":19}}}) : helper)))
    + "\" class=\"menu-item nav-link\" data-categorygroup=\""
    + alias4(alias5((depths[1] != null ? lookupProperty(depths[1],"id") : depths[1]), depth0))
    + "\" data-category=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":8,"column":94},"end":{"line":8,"column":100}}}) : helper)))
    + "\" type=\"button\">\n      "
    + alias4(alias5((depth0 != null ? lookupProperty(depth0,"name") : depth0), depth0))
    + "\n      </a>\n    </li>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<li class=\"nav-item\">\n  <a id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":2,"column":9},"end":{"line":2,"column":15}}}) : helper)))
    + "\" class=\"nav-link collapsed text-truncate\" href=\"#"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":2,"column":65},"end":{"line":2,"column":71}}}) : helper)))
    + "-submenu\" data-toggle=\"collapse\" data-target=\"#"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":2,"column":118},"end":{"line":2,"column":124}}}) : helper)))
    + "-submenu\">\n  "
    + alias4(((helper = (helper = lookupProperty(helpers,"menu-name") || (depth0 != null ? lookupProperty(depth0,"menu-name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"menu-name","hash":{},"data":data,"loc":{"start":{"line":3,"column":2},"end":{"line":3,"column":15}}}) : helper)))
    + "\n  </a>\n  <ul id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":5,"column":10},"end":{"line":5,"column":16}}}) : helper)))
    + "-submenu\" class=\"collapse flex-column pl-2 nav\" aria-expanded=\"false\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"data") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":6,"column":4},"end":{"line":12,"column":13}}})) != null ? stack1 : "")
    + "  </ul>\n</li>";
},"useData":true,"useDepths":true});
templates['sidebar'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div id=\"menu-template-container\" class=\"nav collapse show overflow-auto sticky-top sticky-offset col-2 pl-3 pt-3 border-right\" id=\"navbarNav\">\n  <ul id=\"menu-template\" class=\"nav flex-column flex-nowrap overflow-hidden w-100\">\n    <li class=\"nav-item\">\n      <a id=\"all-diapers-nav\" class=\"nav-link\" href=\"#application\">\n        Wszystkie Pieluszki\n      </a>\n    </li>\n  </ul>\n</div>\n";
},"useData":true});
templates['favourites-page'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"col\">\n	<div id=\"favourites-title\">\n	  Moje Ulubione\n	</div>\n	<div id=\"products-container\" class=\"d-flex flex-row row row-cols-sm-1 row-cols-md-2 row-cols-lg-3 w-100 mx-auto\">\n	</div>\n</div>";
},"useData":true});
templates['items-list'] = template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "  <li class=\"card text-center col pielucha-template\" data-key=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"key") || (depth0 != null ? lookupProperty(depth0,"key") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"key","hash":{},"data":data,"loc":{"start":{"line":2,"column":63},"end":{"line":2,"column":70}}}) : helper)))
    + "\" type=\"button\">\n    <div class=\"card-body\">\n      <div class=\"card-top row justify-content-between\">\n        <div class=\"stars-box text-muted row\">\n          <img src=\"/images/star.png\" class=\"star\">\n          <p class=\"mr-1\">5,0</p>\n        </div>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depths[1] != null ? lookupProperty(depths[1],"isheart") : depths[1]),{"name":"if","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":9,"column":8},"end":{"line":13,"column":15}}})) != null ? stack1 : "")
    + "      </div>\n      <div class=\"embed-responsive embed-responsive-1by1\">\n        <img src="
    + alias4(((helper = (helper = lookupProperty(helpers,"printimage") || (depth0 != null ? lookupProperty(depth0,"printimage") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"printimage","hash":{},"data":data,"loc":{"start":{"line":16,"column":17},"end":{"line":16,"column":31}}}) : helper)))
    + " class=\"img embed-responsive-item rounded pielucha-image\"/>\n      </div>\n      <div class=\"row justify-content-between\">\n        <div class=\"col-auto\">\n          <a href=\"#\" class=\"card-link text-warning\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"producer-name") || (depth0 != null ? lookupProperty(depth0,"producer-name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"producer-name","hash":{},"data":data,"loc":{"start":{"line":20,"column":53},"end":{"line":20,"column":70}}}) : helper)))
    + "</a>\n        </div>\n        <div class=\"col-auto\">\n          <div class=\"row m-0 text-muted\">\n            "
    + alias4(((helper = (helper = lookupProperty(helpers,"printsizes") || (depth0 != null ? lookupProperty(depth0,"printsizes") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"printsizes","hash":{},"data":data,"loc":{"start":{"line":24,"column":12},"end":{"line":24,"column":26}}}) : helper)))
    + "\n          </div>\n        </div>\n      </div>\n      <h5 class=\"text-primary\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"item-name") || (depth0 != null ? lookupProperty(depth0,"item-name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"item-name","hash":{},"data":data,"loc":{"start":{"line":28,"column":31},"end":{"line":28,"column":44}}}) : helper)))
    + "</h5>\n    </div>\n  </li>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "          <div class=\"heart-box\">\n            <img src=\"/images/hear2.png\" class=\"heart\" key=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"key") || (depth0 != null ? lookupProperty(depth0,"key") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"key","hash":{},"data":data,"loc":{"start":{"line":11,"column":60},"end":{"line":11,"column":67}}}) : helper)))
    + "\">\n          </div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"diapers") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":31,"column":9}}})) != null ? stack1 : "");
},"useData":true,"useDepths":true});
templates['items-page'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div id=\"products-container\" class=\"d-flex flex-row row row-cols-sm-1 row-cols-md-2 row-cols-lg-3 w-100 mx-auto\">\n</div>\n";
},"useData":true});
templates['add-review-child'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div id=\"ar-child-basic-data-wrapper\" class=\"form-group row\">\n  <div class=\"col-form-label col-auto\">\n    Wiek dziecka\n  </div>\n  <input class=\"form-control col-1\" type=\"number\" id=\"age-from-input\">\n  <div class=\"col-form-label mx-2\">\n    do\n  </div>\n  <input class=\"form-control col-1\" type=\"number\" id=\"age-to-input\">\n  <div class=\"col-form-label ml-2 mr-5\">\n    miesięcy\n  </div>\n  <div class=\"col-form-label col-auto\">\n    Waga dziecka\n  </div>\n  <input class=\"form-control col-1\" type=\"number\" id=\"weight-from-input\">\n  <div class=\"col-form-label mx-2\">\n    do\n  </div>\n  <input class=\"form-control col-1\" type=\"number\" id=\"weight-to-input\">\n  <div class=\"col-form-label ml-2\">\n    kg\n  </div>\n</div>\n<div id=\"ar-child-desciption-wrapper\" class=\"my-2\">\n  <div class=\"py-1\">\n    <div>\n      Dziecko:\n    </div>\n    <div class=\"form-check form-check-inline\">\n      <input class=\"form-check-input\" type=\"checkbox\" id=\"pulchne\" value=\"option1\">\n      <label class=\"form-check-label\" for=\"pulchne\">pulchne</label>\n    </div>\n    <div class=\"form-check form-check-inline\">\n      <input class=\"form-check-input\" type=\"checkbox\" id=\"szczuple\" value=\"option1\">\n      <label class=\"form-check-label\" for=\"szczuple\">szczupłe</label>\n    </div>\n    <div class=\"form-check form-check-inline\">\n      <input class=\"form-check-input\" type=\"checkbox\" id=\"srednie\" value=\"option1\">\n      <label class=\"form-check-label\" for=\"srednie\">średnie</label>\n    </div>\n  </div>\n  <div class=\"py-1\">\n    <div>\n      Uda:\n    </div>\n    <div class=\"form-check form-check-inline\">\n      <input class=\"form-check-input\" type=\"checkbox\" id=\"pulchne-udka\" value=\"option1\">\n      <label class=\"form-check-label\" for=\"pulchne-udka\">pulchne udka</label>\n    </div>\n    <div class=\"form-check form-check-inline\">\n      <input class=\"form-check-input\" type=\"checkbox\" id=\"szczuple-udka\" value=\"option1\">\n      <label class=\"form-check-label\" for=\"szczuple-udka\">szczupłe udka</label>\n    </div>\n    <div class=\"form-check form-check-inline\">\n      <input class=\"form-check-input\" type=\"checkbox\" id=\"srednie-udka\" value=\"option1\">\n      <label class=\"form-check-label\" for=\"srednie udka\">średnie udka</label>\n    </div>\n  </div>\n</div>\n";
},"useData":true});
templates['add-review'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"\">\n  <div id=\"your-review-title\" class=\"text-primary\">\n    <h5>Twoja opinia</h5>\n  </div>\n  <div id=\"ar-sizes-wrapper\" class=\"form-group row\">\n    <div class=\"col-form-label col-auto\">\n      Używany rozmiar pieluszki\n    </div>\n    <div class=\"col-auto d-flex align-content-center\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"sizes") : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":11,"column":6},"end":{"line":16,"column":15}}})) != null ? stack1 : "")
    + "    </div>\n  </div>\n  <div id=\"ar-child-title\" class=\"my-2\">\n    <h6 class=\"text-primary\">\n      Dodaj opis budowy dziecka\n    </h6>\n  </div>\n  <div id=\"ar-child-wrapper\" class=\"my-2\">\n  </div>\n  <div id=\"ar-text-wrapper\" class=\"my-3\">\n    <div class=\"form-group\">\n      <textarea class=\"form-control\" id=\"ar-text\" rows=\"5\" placeholder=\"Twoja opinia\" ></textarea>\n    </div>\n  </div>\n  <div id=\"ar-photo-wrapper\" class=\"my-2\">\n    <div>\n      <label for=\"input-image\">Dodaj zdjęcie</label>\n      <input type=\"file\" class=\"form-control-file multiple\" id=\"input-image\">\n    </div>\n  </div>\n  <div id=\"ar-stars-wrapper\" class=\"my-3\">\n    <div class=\"my-1\">\n      Twoja ocena\n    </div>\n    <div class=\"form-check form-check-inline\">\n      <input class=\"form-check-input\" type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio1\" value=\"option1\">\n      <label class=\"form-check-label\" for=\"inlineRadio1\">1</label>\n    </div>\n    <div class=\"form-check form-check-inline\">\n      <input class=\"form-check-input\" type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio2\" value=\"option2\">\n      <label class=\"form-check-label\" for=\"inlineRadio2\">2</label>\n    </div>\n    <div class=\"form-check form-check-inline\">\n      <input class=\"form-check-input\" type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio3\" value=\"option3\">\n      <label class=\"form-check-label\" for=\"inlineRadio3\">3</label>\n    </div>\n    <div class=\"form-check form-check-inline\">\n      <input class=\"form-check-input\" type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio4\" value=\"option4\">\n      <label class=\"form-check-label\" for=\"inlineRadio4\">4</label>\n    </div>\n    <div class=\"form-check form-check-inline\">\n      <input class=\"form-check-input\" type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio5\" value=\"option5\">\n      <label class=\"form-check-label\" for=\"inlineRadio5\">5</label>\n    </div>\n    <img src=\"/images/star.png\"/ id=\"star-review\">\n  </div>\n  <div class=\"row d-flex flex-row-reverse\">\n    <div class=\"col-auto\">\n      <button class=\"btn btn-primary\">Dodaj opinię</button>\n    </div>\n  </div>\n</div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <div class=\"form-check form-check-inline\">\n          <input class=\"form-check-input\" type=\"checkbox\" id=\"add-sizes-checkbox-"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"shortcut") : depth0), depth0))
    + "\" value=\"option1\">\n          <label class=\"form-check-label\" for=\"add-sizes-checkbox-"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"shortcut") : depth0), depth0))
    + "\">"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"shortcut") : depth0), depth0))
    + "</label>\n        </div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"with").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"diaper") : depth0),{"name":"with","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":69,"column":9}}})) != null ? stack1 : "");
},"useData":true});
templates['attribute'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"row parameters-row\">\n  <div class=\"attribute-title col-6\">\n    "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":4,"column":4},"end":{"line":4,"column":13}}}) : helper)))
    + "\n  </div>\n  <div class=\"attribute-value col-6 align-self-end\">\n    <div>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"tick") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(4, data, 0),"data":data,"loc":{"start":{"line":8,"column":6},"end":{"line":20,"column":13}}})) != null ? stack1 : "")
    + "    </div>\n  </div>\n</div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <img class=\"tick-image\" src=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"src") || (depth0 != null ? lookupProperty(depth0,"src") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"src","hash":{},"data":data,"loc":{"start":{"line":9,"column":35},"end":{"line":9,"column":42}}}) : helper)))
    + "\" />\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"values") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.program(8, data, 0),"data":data,"loc":{"start":{"line":11,"column":8},"end":{"line":19,"column":15}}})) != null ? stack1 : "");
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"values") : depth0),{"name":"each","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":12,"column":10},"end":{"line":16,"column":19}}})) != null ? stack1 : "");
},"6":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <div>\n              "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"value") || (depth0 != null ? lookupProperty(depth0,"value") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"value","hash":{},"data":data,"loc":{"start":{"line":14,"column":14},"end":{"line":14,"column":23}}}) : helper)))
    + "\n            </div>\n";
},"8":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "          "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"value") || (depth0 != null ? lookupProperty(depth0,"value") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"value","hash":{},"data":data,"loc":{"start":{"line":18,"column":10},"end":{"line":18,"column":19}}}) : helper)))
    + "\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"parameters") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":24,"column":9}}})) != null ? stack1 : "");
},"useData":true});
templates['back-and-add-item-buttons'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"d-flex justify-content-between order-first\">\n<button id=\"back-to-form-button\" type=\"button\" class=\"btn btn-outline-danger mb-3\">\n  Wróć do formularza\n</button>\n<button id=\"add-item-button\" type=\"button\" class=\"btn btn-warning mb-3\">\n  Dodaj pieluchę\n</button>\n</div>\n";
},"useData":true});
templates['delete-item-button'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<button id=\"delete-item-button\" type=\"button\" class=\"btn btn-outline-danger mb-3\">\nUsuń pieluchę\n</button>\n";
},"useData":true});
templates['detail-reviews-summary'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"row\">\n  <div class=\"col-2 d-flex\">\n    <img src=\"/images/star.png\"/ class=\"star\">\n    <div>\n      5\n    </div>\n  </div>\n  <div class=\"col-8\">\n    <div class=\"d-flex\">\n      <div class=\"bar\">\n      </div>\n    </div>\n  </div>\n  <div class=\"col-2\">\n    <div>\n      37\n    </div>\n  </div>\n</div>\n";
},"useData":true});
templates['devider'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"w-100\"></div>\n";
},"useData":true});
templates['dimensions-values'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "  <div id=\"dimensions-pars\" class=\"row parameters-row\">\n    <div class=\"col-7 align-self-end d-flex\">\n      <div class=\"text-danger font-weight-bold mr-2\">\n        "
    + alias4(((helper = (helper = lookupProperty(helpers,"letter") || (depth0 != null ? lookupProperty(depth0,"letter") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"letter","hash":{},"data":data,"loc":{"start":{"line":5,"column":8},"end":{"line":5,"column":18}}}) : helper)))
    + "\n      </div>\n      <div class=\"attribute-title\">\n        "
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":8,"column":8},"end":{"line":8,"column":17}}}) : helper)))
    + "\n      </div>\n    </div>\n    <div class=\"attribute-value col-5 align-self-end\">\n      <div>\n        "
    + alias4(((helper = (helper = lookupProperty(helpers,"value") || (depth0 != null ? lookupProperty(depth0,"value") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"value","hash":{},"data":data,"loc":{"start":{"line":13,"column":8},"end":{"line":13,"column":17}}}) : helper)))
    + " cm\n      </div>\n    </div>\n  </div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"dimensions") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":17,"column":9}}})) != null ? stack1 : "");
},"useData":true});
templates['dimensions'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div>\n  <img class=\"dimensions-image\" src=\"../images/otulacz.png\" />\n</div>\n<div class=\"my-2 row\">\n  <div class=\"my-2 parameters-group-title text-primary col-auto\">\n    Wymiary dla rozmiaru: \n  </div>\n  <div id=\"size-buttons-dimensions\">\n  </div>\n</div>\n<div id=\"dimensions-wrapper\">\n</div>\n";
},"useData":true});
templates['edit-item-button'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<button id=\"edit-item-button\" type=\"button\" class=\"btn btn-outline-danger mb-3\">\nEdytuj pieluchę\n</button>\n";
},"useData":true});
templates['item-added'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div id=\"item-added-wrapper\">\n  <div class=\"my-5 text-warning\">\n    <h4>Pielucha została dodana :)</h4>\n  </div>\n  <div id=\"go-to-main-page\" class=\"my-5\">\n    <h4>\n      <a href=\"#\">Przejdź do listy pieluch</a>\n    </h4>\n  </div>\n</div>";
},"useData":true});
templates['left-image'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"embed-responsive embed-responsive-1by1\" type=\"button\">\n  <img "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"profile") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":7},"end":{"line":3,"column":42}}})) != null ? stack1 : "")
    + "  class=\"small-image left-image mx-auto img-fluid img-thumbnail embed-responsive-item pielucha-image\" src="
    + alias4(((helper = (helper = lookupProperty(helpers,"url") || (depth0 != null ? lookupProperty(depth0,"url") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"url","hash":{},"data":data,"loc":{"start":{"line":3,"column":148},"end":{"line":3,"column":155}}}) : helper)))
    + " pattern-nr=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"pattern-nr") || (depth0 != null ? lookupProperty(depth0,"pattern-nr") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"pattern-nr","hash":{},"data":data,"loc":{"start":{"line":3,"column":168},"end":{"line":3,"column":182}}}) : helper)))
    + "\" image-nr=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"image-nr") || (depth0 != null ? lookupProperty(depth0,"image-nr") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"image-nr","hash":{},"data":data,"loc":{"start":{"line":3,"column":194},"end":{"line":3,"column":206}}}) : helper)))
    + "\" />\n</div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " id=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"id","hash":{},"data":data,"loc":{"start":{"line":3,"column":27},"end":{"line":3,"column":33}}}) : helper)))
    + "\" ";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"with").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"image") : depth0),{"name":"with","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":5,"column":9}}})) != null ? stack1 : "");
},"useData":true});
templates['parameters-group-wrapper'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "	<div id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":2,"column":10},"end":{"line":2,"column":16}}}) : helper)))
    + "-parameters-group\" class=\"parameters-group-wrapper mb-4\">\n	<div class=\"parameters-group-title text-primary mb-2\">\n  		<h6>"
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":4,"column":8},"end":{"line":4,"column":16}}}) : helper)))
    + "</h6>\n	</div>\n	</div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"with").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"parameters-group") : depth0),{"name":"with","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":7,"column":9}}})) != null ? stack1 : "");
},"useData":true});
templates['parameters-wrapper'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "  <div class=\"row justify-content-between mt-3\">\n    <div class=\"col-6\" id=\"attributes-left\">\n    </div>\n    <div class=\"col-6\" id=\"attributes-right\">\n    </div>\n  </div>\n";
},"useData":true});
templates['pattern-name'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<h5>"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"name","hash":{},"data":data,"loc":{"start":{"line":1,"column":4},"end":{"line":1,"column":12}}}) : helper)))
    + "</h5>\n";
},"useData":true});
templates['pattern-profile-image'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "  <div class=\"col-4 p-0\" type=\"button\">\n    <div class=\"embed-responsive embed-responsive-1by1\">\n    <img "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"profile") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":9},"end":{"line":4,"column":44}}})) != null ? stack1 : "")
    + " class=\"small-image pattern-profile-image mx-auto img-fluid img-thumbnail embed-responsive-item pielucha-image\" src="
    + alias4(((helper = (helper = lookupProperty(helpers,"url") || (depth0 != null ? lookupProperty(depth0,"url") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"url","hash":{},"data":data,"loc":{"start":{"line":4,"column":160},"end":{"line":4,"column":167}}}) : helper)))
    + " pattern-nr=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"pattern-nr") || (depth0 != null ? lookupProperty(depth0,"pattern-nr") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"pattern-nr","hash":{},"data":data,"loc":{"start":{"line":4,"column":180},"end":{"line":4,"column":194}}}) : helper)))
    + "\" image-nr=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"image-nr") || (depth0 != null ? lookupProperty(depth0,"image-nr") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"image-nr","hash":{},"data":data,"loc":{"start":{"line":4,"column":206},"end":{"line":4,"column":218}}}) : helper)))
    + "\" />\n    </div>\n  </div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " id=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"id","hash":{},"data":data,"loc":{"start":{"line":4,"column":29},"end":{"line":4,"column":35}}}) : helper)))
    + "\" ";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"with").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"image") : depth0),{"name":"with","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":2},"end":{"line":7,"column":11}}})) != null ? stack1 : "");
},"useData":true});
templates['product-page'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, alias4="function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div id=\"main\" class=\"col-md-12 order-1 mx-auto\">\n  <div id=\"product-page\" class=\"col-md-10 d-flex flex-column order-1 mx-auto\">\n    <div class=\"main-info-box row my-2 p-3 mx-1 bg-white border\">\n      <div class=\"col-2 pr-0 pl-1\">\n        <div class=\"row justify-content-center\">\n          <div id=\"images-left-box\" class=\"col-10 d-flex flex-column\">\n          </div>\n        </div>\n      </div>\n      <div id=\"profile-image-box\" class=\"col-md-6\">\n      </div>\n      <div class=\"title-box col\">\n        <div id=\"edit-diaper-wrapper\">\n        </div>\n        <h4 class=\"text-primary mb-3\"> "
    + alias3((lookupProperty(helpers,"printnewinfo")||(depth0 && lookupProperty(depth0,"printnewinfo"))||alias2).call(alias1,depth0,{"name":"printnewinfo","hash":{},"data":data,"loc":{"start":{"line":16,"column":39},"end":{"line":16,"column":60}}}))
    + " </h4>\n        <div class=\"d-flex flex-row mb-3\">\n          <h5 class=\"text-secondary mr-2\">od</h5>\n          <h5 href=\"#application\" class=\"text-warning\" type=\"button\">"
    + alias3(((helper = (helper = lookupProperty(helpers,"producer-name") || (depth0 != null ? lookupProperty(depth0,"producer-name") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"producer-name","hash":{},"data":data,"loc":{"start":{"line":19,"column":69},"end":{"line":19,"column":86}}}) : helper)))
    + "</h5>\n        </div>\n        <div id=\"stars-box-wrapper\" class=\"mb-3\">\n        </div>\n        <div class=\"text-secondary mb-3\">\n          <h5 class=\"mb-0\">Rozmiary</h5>\n          <div class=\"d-flex flex-column mt-1\">\n            <div id=\"size-buttons-container\">\n            </div>\n            <div id=\"size-description\" class=\"d-flex flex-row mt-2\">\n            </div>\n          </div>\n        </div>\n        <div class=\"text-secondary\">\n          <div class=\"row\">\n            <div class=\"col-auto\">\n              <h5 class=\"mb-0\">Wzór:</h5>\n            </div>\n            <div id=\"pattern-name\" class=\"col-auto text-primary\">\n            </div>\n          </div>\n          <div id=\"patterns-images-box\" class=\"d-flex flex-row flex-wrap row\">\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"info-box my-2\">\n      <div class=\"card card-body\">\n        <div id=\"info-title\" class=\"text-center\" type=\"button\" aria-expanded=\"false\" aria-controls=\"parameters-wrapper\" data-toggle=\"collapse\" href=\"#parameters-wrapper\">\n          <h5 class=\"card-title text-primary\">\n            Informacje od producenta\n          </h5>\n        </div>\n        <div class=\"collapse text-secondary mx-3\" id=\"parameters-wrapper\">\n          <div id=\"parameters\" class=\"mb-3\">\n          </div>\n          <div id=\"description\" class=\"\">\n            <div class=\"row\">\n              <div class=\"col-12\">\n                <div class=\"parameters-group-title text-primary\">\n                  <h6>Opis</h6>\n                </div>\n                <div class=\"white-space-preline\">\n                  <p>"
    + alias3(((helper = (helper = lookupProperty(helpers,"description") || (depth0 != null ? lookupProperty(depth0,"description") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"description","hash":{},"data":data,"loc":{"start":{"line":62,"column":21},"end":{"line":62,"column":36}}}) : helper)))
    + "</p>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"with").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"diaper") : depth0),{"name":"with","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":72,"column":9}}})) != null ? stack1 : "");
},"useData":true});
templates['profile-image'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<img class=\"product-image mx-auto img-fluid img-thumbnail\" src="
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"url") || (depth0 != null ? lookupProperty(depth0,"url") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"url","hash":{},"data":data,"loc":{"start":{"line":2,"column":63},"end":{"line":2,"column":70}}}) : helper)))
    + "/>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"with").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"image") : depth0),{"name":"with","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":3,"column":9}}})) != null ? stack1 : "");
},"useData":true});
templates['reviews-box'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"reviews-box my-2\">\n  <div id=\"reviews-header-wrapper\" class=\"mb-2 mx-4\">\n    <div id=\"reviews-header\" class=\"row d-flex justify-content-between\">\n      <div id=\"reviews-title\" class=\"text-primary\">\n        <h5>Opinie</h5>\n      </div>\n      <button type=\"button\" class=\"btn btn-primary\">Napisz opinię</button>\n    </div>\n  </div>\n  <div id=\"reviews-summary-wrapper\" class=\"\">\n    <div id=\"reviews-summary\" class=\"row\">\n      <div id=\"rating-box\" class=\"col-6\">\n        <div class=\"d-flex flex-column align-items-center\">\n          <div id=\"reviews-rating\" class=\"m-1\">\n            <h1>4,6</h1>\n          </div>\n          <div id=\"reviews-stars\" class=\"m-1\">\n            <img src=\"/images/star.png\"/ class=\"star\">\n            <img src=\"/images/star.png\"/ class=\"star\">\n            <img src=\"/images/star.png\"/ class=\"star\">\n            <img src=\"/images/star.png\"/ class=\"star\">\n            <img src=\"/images/star.png\"/ class=\"star\">\n          </div>\n          <div id=\"reviews-comments-nr\" class=\"m-1\">\n            45 opinii\n          </div>\n        </div>\n      </div>\n      <div id=\"detail-summary-wrapper\" class=\"col-6\">\n      </div>\n    </div>\n  </div>\n  <div id=\"add-review-form-wrapper\" class=\"my-3 mx-3 form\">\n  </div>\n  <div id=\"reviews-container-wrapper\" class=\"\">\n    <div id=\"reviews-container\" class=\"col\">\n    </div>\n  </div>\n</div>\n";
},"useData":true});
templates['size-buttons'] = template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var helper, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<label class=\"btn btn-outline-secondary\">\n  <input type=\"radio\" name=\"options\" id=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"shortcut") : depth0), depth0))
    + "-"
    + alias2(alias1((depths[1] != null ? lookupProperty(depths[1],"container") : depths[1]), depth0))
    + "-button\" class=\""
    + alias2(alias1((depths[1] != null ? lookupProperty(depths[1],"container") : depths[1]), depth0))
    + "-size-button\" size=\""
    + alias2(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"id","hash":{},"data":data,"loc":{"start":{"line":4,"column":127},"end":{"line":4,"column":133}}}) : helper)))
    + "\" autocomplete=\"off\"> "
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"shortcut") : depth0), depth0))
    + "\n</label>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"diaper") : depth0)) != null ? lookupProperty(stack1,"sizes") : stack1),{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":0},"end":{"line":6,"column":9}}})) != null ? stack1 : "")
    + "</div>\n";
},"useData":true,"useDepths":true});
templates['size-range'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"mr-2\">\n<h6>"
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":3,"column":4},"end":{"line":3,"column":12}}}) : helper)))
    + ":</h6>\n</div>\n<div class=\"\">\n<h6>"
    + alias4(((helper = (helper = lookupProperty(helpers,"min") || (depth0 != null ? lookupProperty(depth0,"min") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"min","hash":{},"data":data,"loc":{"start":{"line":6,"column":4},"end":{"line":6,"column":11}}}) : helper)))
    + " - "
    + alias4(((helper = (helper = lookupProperty(helpers,"max") || (depth0 != null ? lookupProperty(depth0,"max") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"max","hash":{},"data":data,"loc":{"start":{"line":6,"column":14},"end":{"line":6,"column":21}}}) : helper)))
    + " kg</h6>\n</div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"with").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"size") : depth0),{"name":"with","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":8,"column":9}}})) != null ? stack1 : "");
},"useData":true});
templates['stars-box'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "  <div class=\"stars-box d-flex flex-row text-muted\">\n    <p class=\"mr-1\">5,0</p>\n    <img src=\"/images/star.png\"/ class=\"star\">\n    <img src=\"/images/star.png\"/ class=\"star\">\n    <img src=\"/images/star.png\"/ class=\"star\">\n    <img src=\"/images/star.png\"/ class=\"star\">\n    <img src=\"/images/star.png\"/ class=\"star\">\n    <p class=\"ml-1\">2 recenzje</p>\n  </div>\n";
},"useData":true});
templates['add-pattern-button'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"order-3\">\n  <button id=\"add-pattern-button\" type=\"button\" class=\"btn btn-warning\">\n    Dodaj Kolor/ Wzór\n  </button>\n</div>";
},"useData":true});
templates['add-pattern'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div  class=\"mt-4\" id=\"pattern-wrapper-nr-"
    + alias4(((helper = (helper = lookupProperty(helpers,"pattern-number") || (depth0 != null ? lookupProperty(depth0,"pattern-number") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"pattern-number","hash":{},"data":data,"loc":{"start":{"line":1,"column":42},"end":{"line":1,"column":60}}}) : helper)))
    + "\">\n	<div class=\"row justify-content-between align-items-center\">\n		<div class=\"form-group col\">\n    		Wzór nr "
    + alias4(((helper = (helper = lookupProperty(helpers,"pattern-number") || (depth0 != null ? lookupProperty(depth0,"pattern-number") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"pattern-number","hash":{},"data":data,"loc":{"start":{"line":4,"column":14},"end":{"line":4,"column":32}}}) : helper)))
    + "\n    		<input type=\"text\" class=\"form-control mb-2 pattern-name\" id=\"pattern-"
    + alias4(((helper = (helper = lookupProperty(helpers,"pattern-number") || (depth0 != null ? lookupProperty(depth0,"pattern-number") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"pattern-number","hash":{},"data":data,"loc":{"start":{"line":5,"column":76},"end":{"line":5,"column":94}}}) : helper)))
    + "-name\"pattern-number="
    + alias4(((helper = (helper = lookupProperty(helpers,"pattern-number") || (depth0 != null ? lookupProperty(depth0,"pattern-number") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"pattern-number","hash":{},"data":data,"loc":{"start":{"line":5,"column":115},"end":{"line":5,"column":133}}}) : helper)))
    + " placeholder=\"Nazwa Koloru/ Wzoru\">\n  		</div>\n  		<div class=\"col-auto\">\n	  		<button id=\"remove-pattern-nr-"
    + alias4(((helper = (helper = lookupProperty(helpers,"pattern-number") || (depth0 != null ? lookupProperty(depth0,"pattern-number") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"pattern-number","hash":{},"data":data,"loc":{"start":{"line":8,"column":35},"end":{"line":8,"column":53}}}) : helper)))
    + "\" type=\"button\" class=\"btn btn-outline-danger\">\n	    		Usuń wzór i jego zdjęcia\n	  		</button>\n  		</div>\n	</div>\n 	<div id=\"pattern-"
    + alias4(((helper = (helper = lookupProperty(helpers,"pattern-number") || (depth0 != null ? lookupProperty(depth0,"pattern-number") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"pattern-number","hash":{},"data":data,"loc":{"start":{"line":13,"column":19},"end":{"line":13,"column":37}}}) : helper)))
    + "-images-wrapper\">\n	</div>\n</div>";
},"useData":true});
templates['checkbox-input'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"form-group col-12\">\n  <div class=\"form-check\">\n    <input class=\"form-check-input form-input checkbox\" type=\"checkbox\" id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"question-id") || (depth0 != null ? lookupProperty(depth0,"question-id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"question-id","hash":{},"data":data,"loc":{"start":{"line":3,"column":76},"end":{"line":3,"column":91}}}) : helper)))
    + "\" value=\"\">\n    <label class=\"form-check-label\" for="
    + alias4(((helper = (helper = lookupProperty(helpers,"question-id") || (depth0 != null ? lookupProperty(depth0,"question-id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"question-id","hash":{},"data":data,"loc":{"start":{"line":4,"column":40},"end":{"line":4,"column":55}}}) : helper)))
    + ">"
    + alias4(((helper = (helper = lookupProperty(helpers,"text") || (depth0 != null ? lookupProperty(depth0,"text") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"text","hash":{},"data":data,"loc":{"start":{"line":4,"column":56},"end":{"line":4,"column":64}}}) : helper)))
    + "</label>\n  </div>\n</div>";
},"useData":true});
templates['date-input'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div id=\"date\" class=\"form-group date flex-column col-12\" data-provide=\"datepicker\">\n	<label for=\"date-input\" >"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"text") || (depth0 != null ? lookupProperty(depth0,"text") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"text","hash":{},"data":data,"loc":{"start":{"line":2,"column":26},"end":{"line":2,"column":34}}}) : helper)))
    + "</label>\n    <input id=\"release-date-input\" type=\"text\" class=\"form-control d-none\">\n</div>";
},"useData":true});
templates['diaper-category'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<form  class=\"mt-4 needs-validation\" novalidate>\n  <div class=\"form-group flex-column col-12\">\n    <label for=\"diaper-categories-input\">Rodzaj pieluszki</label>\n    <select id=\"diaper-categories-input\" class=\" selectpicker col-12\" multiple data-max-options=\"1\" required>\n    </select>\n    <div id=\"help-block\" class=\"form-text text-warning\">\n	  Aktualnie możliwe jest dodatnie tylko otulacza wełnianego. Wkrótce będzie można dodać również inne rodzaje pieluszek.\n	</div>\n  </div>      \n  <button id=\"next-button\" type=\"submit\" class=\"btn btn-primary m-3 align-self-end\">Dalej</button>\n</form>";
},"useData":true});
templates['dimension-title'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"dimension-title mb-2\">\n  "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"dimension-text") || (depth0 != null ? lookupProperty(depth0,"dimension-text") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"dimension-text","hash":{},"data":data,"loc":{"start":{"line":2,"column":2},"end":{"line":2,"column":20}}}) : helper)))
    + "\n</div>";
},"useData":true});
templates['dimensions-page'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <div id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":9,"column":17},"end":{"line":9,"column":23}}}) : helper)))
    + "-dimensions\" class=\"col\">\n            <div id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":10,"column":21},"end":{"line":10,"column":27}}}) : helper)))
    + "-title\" class=\"font-weight-bold text-center\">\n              "
    + alias4(((helper = (helper = lookupProperty(helpers,"shortcut") || (depth0 != null ? lookupProperty(depth0,"shortcut") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"shortcut","hash":{},"data":data,"loc":{"start":{"line":11,"column":14},"end":{"line":11,"column":26}}}) : helper)))
    + "\n            </div>\n          </div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div id='dimensions-table' class=\"mb-3\">\n  <div class=\"row my-2\">\n    <div id=\"dimensions-categories\" class=\"col-3 font-weight-bold\">\n      Rozmiar\n    </div>\n    <div class=\"col-9\">\n      <div class=\"row\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"sizes") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":8,"column":8},"end":{"line":14,"column":17}}})) != null ? stack1 : "")
    + "      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-3\">\n      <div id=\"dimensions-titles\" class=\"\">\n      </div>\n    </div>\n    <div class=\"col-9\">\n      <div id=\"inputs-box\" class=\"row\">\n      </div>\n    </div>\n  </div>\n</div>";
},"useData":true});
templates['fabrics-inputs'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"input-group mb-3 row\">\n  <div class=\"col-3\">\n    <label for=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":4,"column":16},"end":{"line":4,"column":24}}}) : helper)))
    + "-input class=\"\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":4,"column":40},"end":{"line":4,"column":48}}}) : helper)))
    + "</label>\n  </div>\n  <input id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":6,"column":13},"end":{"line":6,"column":21}}}) : helper)))
    + "-input\" name=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":6,"column":35},"end":{"line":6,"column":43}}}) : helper)))
    + "\" type=\"text\" aria-describedby=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":6,"column":75},"end":{"line":6,"column":83}}}) : helper)))
    + "-addon\" class=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"layer-id") || (depth0 != null ? lookupProperty(depth0,"layer-id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"layer-id","hash":{},"data":data,"loc":{"start":{"line":6,"column":98},"end":{"line":6,"column":110}}}) : helper)))
    + " form-control col-3\" layer-id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"layer-id") || (depth0 != null ? lookupProperty(depth0,"layer-id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"layer-id","hash":{},"data":data,"loc":{"start":{"line":6,"column":141},"end":{"line":6,"column":153}}}) : helper)))
    + "\">\n  <div class=\"input-group-append\">\n    <span class=\"input-group-text\" id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":8,"column":39},"end":{"line":8,"column":47}}}) : helper)))
    + "-addon\">%</span>\n  </div>\n</div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"fabrics") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":11,"column":9}}})) != null ? stack1 : "");
},"useData":true});
templates['form-page-title'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"align-self-center text-primary font-weight-bold mb-3\">\n	"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"title","hash":{},"data":data,"loc":{"start":{"line":2,"column":1},"end":{"line":2,"column":10}}}) : helper)))
    + "\n</div>";
},"useData":true});
templates['form-page'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "  <form id=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"id","hash":{},"data":data,"loc":{"start":{"line":2,"column":12},"end":{"line":2,"column":18}}}) : helper)))
    + "\" class=\"d-flex flex-column mb-3 needs-validation\" novalidate>\n	  <div class=\"mb-3 order-last\">\n	    <button id=\"back-button\" type=\"button\" class=\"btn btn-outline-primary\"> Cofnij</button>\n	    <button id=\"next-button\" type=\"submit\" class=\"btn btn-primary float-right\"> Dalej</button>\n	  </div>\n  </form>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"with").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"formPage") : depth0),{"name":"with","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":8,"column":9}}})) != null ? stack1 : "");
},"useData":true});
templates['form-sizes'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div id=\"sizes-box\" class=\"form-group flex-column col-12\">\n  <label for=\"sizes-input\">Rozmiary</label>\n  <select id=\"sizes-input\" class=\"col-12 form-input select\" selectpicker multiple required>\n  </select>\n</div>";
},"useData":true});
templates['form-view'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div id=\"form-view-wrapper\" class=\"col-6 bg-white mt-6\">\n</div>";
},"useData":true});
templates['form'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"d-flex flex-column\">\n  <div class=\"progress my-3\">\n    <div id=\"progress-bar\" class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"0\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n  </div>\n  <div id=\"form-wrapper\">\n  </div>\n</div>";
},"useData":true});
templates['images-size-box'] = template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.lambda, alias3=container.escapeExpression, alias4=container.hooks.helperMissing, alias5="function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <div class=\"form-group m-3 p-2\">\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"profile-image") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":7,"column":6},"end":{"line":9,"column":13}}})) != null ? stack1 : "")
    + "      <div class=\"d-flex flex-row\">\n        <button type=\"button\" class=\"btn btn-outline-danger btn-sm remove-image-button mr-2\" pattern-nr=\""
    + alias3(alias2((depths[1] != null ? lookupProperty(depths[1],"pattern-number") : depths[1]), depth0))
    + "\" image-nr=\""
    + alias3(((helper = (helper = lookupProperty(helpers,"image-number") || (depth0 != null ? lookupProperty(depth0,"image-number") : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias1,{"name":"image-number","hash":{},"data":data,"loc":{"start":{"line":11,"column":138},"end":{"line":11,"column":154}}}) : helper)))
    + "\" size-id=\""
    + alias3(alias2((depths[1] != null ? lookupProperty(depths[1],"size-id") : depths[1]), depth0))
    + "\" >\n          X\n        </button>\n        <input type=\"file\" class=\"form-control-file image-input pattern-"
    + alias3(alias2((depths[1] != null ? lookupProperty(depths[1],"pattern-number") : depths[1]), depth0))
    + "\" id=\"pattern-"
    + alias3(alias2((depths[1] != null ? lookupProperty(depths[1],"pattern-number") : depths[1]), depth0))
    + "-size-"
    + alias3(alias2((depths[1] != null ? lookupProperty(depths[1],"size-id") : depths[1]), depth0))
    + "-image-"
    + alias3(((helper = (helper = lookupProperty(helpers,"image-number") || (depth0 != null ? lookupProperty(depth0,"image-number") : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias1,{"name":"image-number","hash":{},"data":data,"loc":{"start":{"line":14,"column":155},"end":{"line":14,"column":171}}}) : helper)))
    + "\" pattern-number=\""
    + alias3(alias2((depths[1] != null ? lookupProperty(depths[1],"pattern-number") : depths[1]), depth0))
    + "\" image-number=\""
    + alias3(((helper = (helper = lookupProperty(helpers,"image-number") || (depth0 != null ? lookupProperty(depth0,"image-number") : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias1,{"name":"image-number","hash":{},"data":data,"loc":{"start":{"line":14,"column":226},"end":{"line":14,"column":242}}}) : helper)))
    + "\" size-id=\""
    + alias3(alias2((depths[1] != null ? lookupProperty(depths[1],"size-id") : depths[1]), depth0))
    + "\" "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"profile-image") : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":14,"column":269},"end":{"line":14,"column":307}}})) != null ? stack1 : "")
    + " >\n        <div class=\"invalid-feedback\">\n          Dodaj zdjęcie.\n        </div>\n      </div>\n      <div id=\"file-preview-pattern-"
    + alias3(alias2((depths[1] != null ? lookupProperty(depths[1],"pattern-number") : depths[1]), depth0))
    + "-size-"
    + alias3(alias2((depths[1] != null ? lookupProperty(depths[1],"size-id") : depths[1]), depth0))
    + "-image-"
    + alias3(((helper = (helper = lookupProperty(helpers,"image-number") || (depth0 != null ? lookupProperty(depth0,"image-number") : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias1,{"name":"image-number","hash":{},"data":data,"loc":{"start":{"line":19,"column":84},"end":{"line":19,"column":100}}}) : helper)))
    + "\" class=\"preview-image-box\" pattern-nr=\""
    + alias3(alias2((depths[1] != null ? lookupProperty(depths[1],"pattern-number") : depths[1]), depth0))
    + "\" image-nr=\""
    + alias3(((helper = (helper = lookupProperty(helpers,"image-number") || (depth0 != null ? lookupProperty(depth0,"image-number") : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias1,{"name":"image-number","hash":{},"data":data,"loc":{"start":{"line":19,"column":173},"end":{"line":19,"column":189}}}) : helper)))
    + "\" size-id=\""
    + alias3(alias2((depths[1] != null ? lookupProperty(depths[1],"size-id") : depths[1]), depth0))
    + "\">\n      </div>\n    </div>\n";
},"2":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var helper, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <label for=\"pattern-"
    + alias2(alias1((depths[1] != null ? lookupProperty(depths[1],"pattern-number") : depths[1]), depth0))
    + "-size-"
    + alias2(alias1((depths[1] != null ? lookupProperty(depths[1],"size-id") : depths[1]), depth0))
    + "-image-"
    + alias2(((helper = (helper = lookupProperty(helpers,"image-number") || (depth0 != null ? lookupProperty(depth0,"image-number") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"image-number","hash":{},"data":data,"loc":{"start":{"line":8,"column":76},"end":{"line":8,"column":92}}}) : helper)))
    + "\">Zdjęcie profilowe pieluszki:</label>\n";
},"4":function(container,depth0,helpers,partials,data) {
    return " required ";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div size=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"size-id") || (depth0 != null ? lookupProperty(depth0,"size-id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"size-id","hash":{},"data":data,"loc":{"start":{"line":1,"column":11},"end":{"line":1,"column":22}}}) : helper)))
    + "\" class=\"images-size-box border mb-3\" pattern=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"pattern-number") || (depth0 != null ? lookupProperty(depth0,"pattern-number") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"pattern-number","hash":{},"data":data,"loc":{"start":{"line":1,"column":69},"end":{"line":1,"column":87}}}) : helper)))
    + "\">\n  <div class=\"ml-2 mt-2\" required>\n    "
    + alias4(((helper = (helper = lookupProperty(helpers,"size-name") || (depth0 != null ? lookupProperty(depth0,"size-name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"size-name","hash":{},"data":data,"loc":{"start":{"line":3,"column":4},"end":{"line":3,"column":17}}}) : helper)))
    + "\n  </div>\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"image-numbers") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":2},"end":{"line":22,"column":11}}})) != null ? stack1 : "")
    + "</div>";
},"useData":true,"useDepths":true});
templates['layers'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":2,"column":9},"end":{"line":2,"column":15}}}) : helper)))
    + "\" class=\"mb-4 layer\">\n  <div class=\"text-info mb-3\">\n    "
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":4,"column":4},"end":{"line":4,"column":13}}}) : helper)))
    + "\n  </div>\n</div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"layers") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":7,"column":9}}})) != null ? stack1 : "");
},"useData":true});
templates['new-input'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "  <option>"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"name","hash":{},"data":data,"loc":{"start":{"line":2,"column":10},"end":{"line":2,"column":18}}}) : helper)))
    + "</option>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"data") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":3,"column":9}}})) != null ? stack1 : "");
},"useData":true});
templates['select-input'] = template({"1":function(container,depth0,helpers,partials,data) {
    return " required ";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"question-id") || (depth0 != null ? lookupProperty(depth0,"question-id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"question-id","hash":{},"data":data,"loc":{"start":{"line":1,"column":9},"end":{"line":1,"column":24}}}) : helper)))
    + "-box\" class=\"form-group flex-column col-12\">\n  <label for=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"question-id") || (depth0 != null ? lookupProperty(depth0,"question-id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"question-id","hash":{},"data":data,"loc":{"start":{"line":2,"column":14},"end":{"line":2,"column":29}}}) : helper)))
    + "\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"text") || (depth0 != null ? lookupProperty(depth0,"text") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"text","hash":{},"data":data,"loc":{"start":{"line":2,"column":31},"end":{"line":2,"column":39}}}) : helper)))
    + "</label>\n  <select id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"question-id") || (depth0 != null ? lookupProperty(depth0,"question-id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"question-id","hash":{},"data":data,"loc":{"start":{"line":3,"column":14},"end":{"line":3,"column":29}}}) : helper)))
    + "\" class=\"col-12 form-input select "
    + alias4(((helper = (helper = lookupProperty(helpers,"fabrics") || (depth0 != null ? lookupProperty(depth0,"fabrics") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fabrics","hash":{},"data":data,"loc":{"start":{"line":3,"column":63},"end":{"line":3,"column":74}}}) : helper)))
    + "\" selectpicker multiple "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"required") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":98},"end":{"line":3,"column":131}}})) != null ? stack1 : "")
    + " >\n  </select>\n</div>";
},"useData":true});
templates['size-input'] = template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"input-group mb-2\">\n  <input type=\"text\" aria-describedby=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"dimension") || (depth0 != null ? lookupProperty(depth0,"dimension") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"dimension","hash":{},"data":data,"loc":{"start":{"line":3,"column":39},"end":{"line":3,"column":52}}}) : helper)))
    + "-"
    + alias4(alias5(((stack1 = (depths[1] != null ? lookupProperty(depths[1],"size") : depths[1])) != null ? lookupProperty(stack1,"id") : stack1), depth0))
    + "-addon\" class=\"form-control dimension-input "
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":3,"column":111},"end":{"line":3,"column":117}}}) : helper)))
    + " "
    + alias4(alias5(((stack1 = (depths[1] != null ? lookupProperty(depths[1],"size") : depths[1])) != null ? lookupProperty(stack1,"id") : stack1), depth0))
    + "\" size=\""
    + alias4(alias5(((stack1 = (depths[1] != null ? lookupProperty(depths[1],"size") : depths[1])) != null ? lookupProperty(stack1,"id") : stack1), depth0))
    + "\" dimension-id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":3,"column":170},"end":{"line":3,"column":176}}}) : helper)))
    + "\" >\n  <div class=\"input-group-append\">\n    <span class=\"input-group-text\" id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"dimension") || (depth0 != null ? lookupProperty(depth0,"dimension") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"dimension","hash":{},"data":data,"loc":{"start":{"line":5,"column":39},"end":{"line":5,"column":52}}}) : helper)))
    + "-"
    + alias4(alias5(((stack1 = (depths[1] != null ? lookupProperty(depths[1],"size") : depths[1])) != null ? lookupProperty(stack1,"id") : stack1), depth0))
    + "-addon\">cm</span>\n  </div>\n</div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"dimensions") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":8,"column":9}}})) != null ? stack1 : "");
},"useData":true,"useDepths":true});
templates['size-inputs-column'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"col\">\n  <div id=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"id","hash":{},"data":data,"loc":{"start":{"line":3,"column":11},"end":{"line":3,"column":17}}}) : helper)))
    + "-inputs-box\" class=\"d-flex flex-column dimension-inputs-box\">\n  </div>\n</div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"sizes") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":6,"column":9}}})) != null ? stack1 : "");
},"useData":true});
templates['text-input'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"form-group\">\n  <label for=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":3,"column":14},"end":{"line":3,"column":20}}}) : helper)))
    + "-input\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":3,"column":28},"end":{"line":3,"column":37}}}) : helper)))
    + "</label>\n  <textarea id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":4,"column":16},"end":{"line":4,"column":22}}}) : helper)))
    + "-input\" type=\"text\" rows=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"rows-nr") || (depth0 != null ? lookupProperty(depth0,"rows-nr") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rows-nr","hash":{},"data":data,"loc":{"start":{"line":4,"column":48},"end":{"line":4,"column":59}}}) : helper)))
    + "\" class=\"form-control "
    + alias4(((helper = (helper = lookupProperty(helpers,"input-name") || (depth0 != null ? lookupProperty(depth0,"input-name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"input-name","hash":{},"data":data,"loc":{"start":{"line":4,"column":81},"end":{"line":4,"column":95}}}) : helper)))
    + " text-input\" "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"required") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":108},"end":{"line":4,"column":141}}})) != null ? stack1 : "")
    + " ></textarea>\n</div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    return " required ";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"with").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"input-data") : depth0),{"name":"with","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":6,"column":9}}})) != null ? stack1 : "");
},"useData":true});
templates['weight-input'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "  <div class=\"row\">\n    <div class=\"col-2 font-weight-bold\">\n      "
    + alias4(((helper = (helper = lookupProperty(helpers,"shortcut") || (depth0 != null ? lookupProperty(depth0,"shortcut") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"shortcut","hash":{},"data":data,"loc":{"start":{"line":7,"column":6},"end":{"line":7,"column":18}}}) : helper)))
    + "\n    </div>\n    <div class=\"input-group mb-2 col-5\">\n      <label for=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":10,"column":18},"end":{"line":10,"column":24}}}) : helper)))
    + "-from-weight-input\" class=\"px-2\">od</label>\n      <input id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":11,"column":17},"end":{"line":11,"column":23}}}) : helper)))
    + "-from-weight-input\" type=\"text\" aria-describedby=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":11,"column":73},"end":{"line":11,"column":79}}}) : helper)))
    + "-from-addon\" class=\"form-control weight-input-from weight-input\" size=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":11,"column":150},"end":{"line":11,"column":156}}}) : helper)))
    + "\" >\n      <div class=\"input-group-append\">\n        <span class=\"input-group-text\" id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":13,"column":43},"end":{"line":13,"column":49}}}) : helper)))
    + "-from-addon\">kg</span>\n      </div>\n    </div>\n    <div class=\"input-group mb-2 col-5\">\n      <label for=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":17,"column":18},"end":{"line":17,"column":24}}}) : helper)))
    + "-till-weight-input\" class=\"px-2\">do</label>\n      <input id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":18,"column":17},"end":{"line":18,"column":23}}}) : helper)))
    + "-till-weight-input\" type=\"text\" aria-describedby=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":18,"column":73},"end":{"line":18,"column":79}}}) : helper)))
    + "-till-addon\" class=\"form-control weight-input-till weight-input\" size=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":18,"column":150},"end":{"line":18,"column":156}}}) : helper)))
    + "\" >\n      <div class=\"input-group-append\">\n        <span class=\"input-group-text\" id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":20,"column":43},"end":{"line":20,"column":49}}}) : helper)))
    + "-till-addon\">kg</span>\n      </div>\n    </div>\n  </div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div id=\"weight-inputs\">\n  <div id=\"weight-inputs-title\" class=\"d-flex flex-column\">\n  </div>\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"sizes") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":2},"end":{"line":24,"column":11}}})) != null ? stack1 : "")
    + "</div>";
},"useData":true});
templates['login-page'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"justify-content-center\">\n  <form class=\"\">\n    <div id=\"log-in-box\" class=\"form mx-auto mt-5\">\n      <div id=\"email-box\" class=\"form-group\">\n        <label for=\"inputEmail\">Email</label>\n        <input id=\"email\" type=\"email\" class=\"form-control\" id=\"inputEmail\" aria-describedby=\"emailHelp\">\n      </div>\n      <div id=\"password-box\" class=\"form-group\">\n        <label for=\"exampleInputPassword1\">Hasło</label>\n        <input id=\"password\" type=\"password\" class=\"form-control\" id=\"exampleInputPassword1\">\n      </div>\n      <a id=\"log-in\" class=\"btn btn-primary\" role=\"button\">Zaloguj</a>\n<!--      <div id=\"create-account\">\n        <a href=\"#login\">Załóż konto</a>\n      </div> -->\n      <button id=\"log-out\" type=\"button\" class=\"btn btn-primary d-none\">Wyloguj</button>\n    </div>\n  </form>\n</div>";
},"useData":true});
templates['subscribe'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<form id=\"subscribe-box\" class=\"form mx-auto mt-5 needs-validation\" novalidate>\n  <div class=\"mb-2 text-warning\">\n    Zarejestruj sie.\n  </div>\n  <div id=\"email-box\" class=\"form-group\">\n    <label for=\"email\">Email</label>\n    <input id=\"email\" type=\"email\" class=\"form-control\" aria-describedby=\"emailHelp\" placeholder=\"Email\" required>\n    <div id=\"invalid-feedback-email\" class=\"invalid-feedback\">\n      Wpisz poprawny adres email.\n    </div>  </div>\n  <div id=\"password-box\" class=\"form-group\">\n    <label for=\"password1\">Podaj Hasło</label>\n    <input id=\"password1\" type=\"password\" class=\"form-control\" placeholder=\"Podaj Hasło\" required>\n    <div id=\"invalid-feedback-password1\" class=\"invalid-feedback\">\n    </div>\n    <div id=\"valid-feedback-password1\" class=\"valid-feedback\">\n      ok\n    </div>\n  </div>\n  <div id=\"repeat-password-box\" class=\"form-group\">\n    <label for=\"password2\">Powtórz Hasło</label>\n    <input id=\"password2\" type=\"password\" class=\"form-control\" placeholder=\"Powtórz Hasło\" required>\n    <div id=\"invalid-feedback-password2\" class=\"invalid-feedback\">\n    </div>\n    <div id=\"valid-feedback-password2\" class=\"valid-feedback\">\n      ok\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <div id=\"role-checkbox\" class=\"form-check\">\n      <input data-toggle=\"collapse\" data-target='#name-box' class=\"form-check-input\" type=\"checkbox\" id=\"producer\">\n      <label class=\"form-check-label\" for=\"producer\">Jestem producentem</label>\n    </div>\n  </div>\n  <div id=\"name-box\" class=\"form-group\">\n    <label for=\"name\">Nazwa Producenta</label>\n    <input id=\"name\" type=\"text\" class=\"form-control\" aria-describedby=\"emailHelp\" placeholder=\"Nazwa Producenta\">\n  </div>\n  <button id=\"sign-up\" type=\"submit\" class=\"btn btn-primary mt-2\">Zarejestruj</button>\n</form>";
},"useData":true});
templates['add-new-diaper'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"mb-3\">\n	<button id=\"add-diaper\" class=\"btn-primary btn\">\n	Dodaj pieluchę\n	</button>\n</div>\n";
},"useData":true});
templates['user-page'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"d-flex flex-column w-100\">\n	<div id=\"user-navbar\">\n		<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n		  <div class=\"collapse navbar-collapse\" id=\"navbarNavAltMarkup\">\n		    <div class=\"navbar-nav\">\n		      <a class=\"nav-item nav-link active\" href=\"#\">\n		      <h5>Moje pieluszki</h5> <span class=\"sr-only\">(current)</span></a>\n		      <a class=\"nav-item nav-link disabled\" href=\"#\"> <h5>Ustawienia</h5> </a>\n		    </div>\n		  </div>\n		</nav>\n	</div>\n	<div id=\"main-content\">\n	</div>\n</div>";
},"useData":true});
})();