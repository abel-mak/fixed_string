"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[728],{2507:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return u},default:function(){return k},frontMatter:function(){return c},metadata:function(){return m},toc:function(){return f}});var i=n(7462),s=n(3366),r=(n(7294),n(3905)),a=n(1848),o=n(8330),p=n(6354),d=n(6213),l=["components"],c={sidebar_position:15,sidebar_label:"find"},u="fixstr::basic_fixed_string::find",m={unversionedId:"api/member-functions/find",id:"api/member-functions/find",isDocsHomePage:!1,title:"fixstr::basic_fixed_string::find",description:"Finds the first substring equal to the given character sequence. Search begins at pos, i.e. the found substring must not begin in a position preceding pos.",source:"@site/docs/api/member-functions/find.mdx",sourceDirName:"api/member-functions",slug:"/api/member-functions/find",permalink:"/fixed_string/docs/api/member-functions/find",editUrl:"https://github.com/unterumarmung/fixed_string/edit/add-documentation/documentation/docs/api/member-functions/find.mdx",version:"current",sidebarPosition:15,frontMatter:{sidebar_position:15,sidebar_label:"find"},sidebar:"tutorialSidebar",previous:{title:"substr",permalink:"/fixed_string/docs/api/member-functions/substr"}},f=[{value:"Parameters",id:"parameters",children:[]},{value:"Return value",id:"return-value",children:[]},{value:"Complexity",id:"complexity",children:[]},{value:"Example",id:"example",children:[]}],h={toc:f};function k(e){var t=e.components,n=(0,s.Z)(e,l);return(0,r.kt)("wrapper",(0,i.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"fixstrbasic_fixed_stringfind"},(0,r.kt)("inlineCode",{parentName:"h1"},"fixstr::basic_fixed_string::find")),(0,r.kt)(o.Z,{mdxType:"CppOverloadList"},(0,r.kt)(a.Z,{num:1,code:"template <size_t M>\n[[nodiscard]] constexpr size_type find(const same_with_other_size<M>& str, size_type pos = npos) const noexcept;",mdxType:"CppOverload"}),(0,r.kt)(a.Z,{num:2,code:" [[nodiscard]] constexpr size_type find(string_view_type sv, size_type pos = 0) const noexcept;",mdxType:"CppOverload"}),(0,r.kt)(a.Z,{num:3,code:"[[nodiscard]] constexpr size_type find(const value_type* s, size_type pos, size_type n) const;",mdxType:"CppOverload"}),(0,r.kt)(a.Z,{num:4,code:"[[nodiscard]] constexpr size_type find(const value_type* s, size_type pos = 0) const;",mdxType:"CppOverload"}),(0,r.kt)(a.Z,{num:5,code:"[[nodiscard]] constexpr size_type find(value_type c, size_type pos = 0) const noexcept;",mdxType:"CppOverload"})),(0,r.kt)("p",null,"Finds the first substring equal to the given character sequence. Search begins at ",(0,r.kt)("inlineCode",{parentName:"p"},"pos"),", i.e. the found substring must not begin in a position preceding ",(0,r.kt)("inlineCode",{parentName:"p"},"pos"),"."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Finds the first substring equal to ",(0,r.kt)("inlineCode",{parentName:"p"},"str"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Finds the first substring equal to ",(0,r.kt)("inlineCode",{parentName:"p"},"sv"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Finds the first substring equal to the range ",(0,r.kt)("inlineCode",{parentName:"p"},"[s, s + n)"),". This range may contain null characters.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Finds the first substring equal to the character string pointed to by s. The length of the string is determined by the first null character using ",(0,r.kt)("inlineCode",{parentName:"p"},"TTraits::length(s)"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Finds the first character ",(0,r.kt)("inlineCode",{parentName:"p"},"ch"),"."))),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"str"),"\t-\tstring to search for"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"sv"),"  -   string view to search for"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"pos"),"\t-\tposition at which to start the search"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"n"),"   -\tlength of substring to search for"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"s"),"   -\tpointer to a character string to search for"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ch"),"\t-\tcharacter to search for")),(0,r.kt)("h2",{id:"return-value"},"Return value"),(0,r.kt)("p",null,"Position of the first character of the found substring or ",(0,r.kt)("inlineCode",{parentName:"p"},"npos")," if no such substring is found."),(0,r.kt)("h2",{id:"complexity"},"Complexity"),(0,r.kt)("p",null,"Linear in ",(0,r.kt)("inlineCode",{parentName:"p"},"size()"),"."),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)(p.Z,{link:"https://godbolt.org/z/5q38j3jWj",mdxType:"LinkButton"},"Run this code!"),(0,r.kt)(d.Z,{className:"language-cpp",mdxType:"CodeBlock"},'#include <fixed_string.hpp>\n#include <iostream>\n#include <string>\n\ntemplate <auto n>\nvoid print(auto s) {\n    if constexpr (n == decltype(s)::npos) {\n        std::cout << "not found\\n";\n    } else {\n        std::cout << "found: " << s.template substr<n>() << \'\\n\';\n    }\n}\n\nint main() {\n    constexpr fixstr::fixed_string s = "This is a string";\n\n    // search from beginning of string\n    constexpr auto n1 = s.find("is");\n    print<n1>(s);\n\n    // search from position 5\n    constexpr auto n2 = s.find("is", 5);\n    print<n2>(s);\n\n    // find a single character\n    constexpr auto n3 = s.find(\'a\');\n    print<n3>(s);\n\n    // find a single character\n    constexpr auto n4 = s.find(\'q\');\n    print<n4>(s);\n}'))}k.isMDXComponent=!0}}]);