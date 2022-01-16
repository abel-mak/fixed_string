"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[56],{2151:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return d},contentTitle:function(){return m},metadata:function(){return p},toc:function(){return s},default:function(){return k}});var n=a(7462),r=a(3366),i=(a(7294),a(3905)),l=["components"],d={sidebar_position:1,sidebar_label:"basic_fixed_string"},m="Class template `basic_fixed_string`",p={unversionedId:"api/basic_fixed_string",id:"api/basic_fixed_string",isDocsHomePage:!1,title:"Class template `basic_fixed_string`",description:"Defined in header ``",source:"@site/docs/api/basic_fixed_string.md",sourceDirName:"api",slug:"/api/basic_fixed_string",permalink:"/fixed_string/docs/api/basic_fixed_string",editUrl:"https://github.com/unterumarmung/fixed_string/edit/add-documentation/documentation/docs/api/basic_fixed_string.md",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"basic_fixed_string"},sidebar:"tutorialSidebar",previous:{title:"About",permalink:"/fixed_string/docs/about"},next:{title:"Constructors",permalink:"/fixed_string/docs/api/member-functions/constructors"}},s=[{value:"Template parameters",id:"template-parameters",children:[]},{value:"Member types",id:"member-types",children:[]},{value:"Member functions",id:"member-functions",children:[]}],o={toc:s};function k(t){var e=t.components,a=(0,r.Z)(t,l);return(0,i.kt)("wrapper",(0,n.Z)({},o,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"class-template-basic_fixed_string"},"Class template ",(0,i.kt)("inlineCode",{parentName:"h1"},"basic_fixed_string")),(0,i.kt)("h5",{id:"defined-in-header-fixed_stringhpp"},"Defined in header ",(0,i.kt)("a",{parentName:"h5",href:"https://github.com/unterumarmung/fixed_string/blob/master/include/fixed_string.hpp"},(0,i.kt)("inlineCode",{parentName:"a"},"<fixed_string.hpp>"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"template<\n    typename TChar, \n    std::size_t N, \n    typename TTraits = std::char_traits<TChar>\n> struct basic_fixed_string;\n")),(0,i.kt)("p",null,"The class template ",(0,i.kt)("inlineCode",{parentName:"p"},"basic_fixed_string")," describes objects that can store a sequence consisting of a fixed number of arbitrary ",(0,i.kt)("inlineCode",{parentName:"p"},"char"),"-like objects with the first element of the sequence at position zero. "),(0,i.kt)("p",null,"Several typedefs for common character types are provided:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Definition"),(0,i.kt)("th",{parentName:"tr",align:null}))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"fixstr::fixed_string<N>")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"fixstr::basic_fixed_string<char, N>")),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"fixstr::fixed_u8string<N>")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"fixstr::basic_fixed_string<char8_t, N>")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("em",{parentName:"td"},"since C++20"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"fixstr::fixed_u16string<N>")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"fixstr::basic_fixed_string<char16_t, N>")),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"fixstr::fixed_u32string<N>")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"fixstr::basic_fixed_string<char32_t, N>")),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"fixstr::fixed_wstring<N>")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"fixstr::basic_fixed_string<wchar_t, N>")),(0,i.kt)("td",{parentName:"tr",align:null})))),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"NOTE")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"In actual implementation, these are not the type aliases. Unfortunately, early GCC versions that are supported cNTTP couldn't automatically deduct ",(0,i.kt)("inlineCode",{parentName:"p"},"size_t"),' template parameter when an alias was used in cNTTP. So, the actual implementation is that every "typedef" is actually a separate class inherited from ',(0,i.kt)("inlineCode",{parentName:"p"},"basic_fixed_string"),". "))),(0,i.kt)("h3",{id:"template-parameters"},"Template parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"TChar")),(0,i.kt)("td",{parentName:"tr",align:null},"character type")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"N")),(0,i.kt)("td",{parentName:"tr",align:null},"string size")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"TTraits")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://en.cppreference.com/w/cpp/named_req/CharTraits"},(0,i.kt)("inlineCode",{parentName:"a"},"CharTraits"))," class specifying the operations on the character type. Like for ",(0,i.kt)("inlineCode",{parentName:"td"},"std::basic_string")," or ",(0,i.kt)("inlineCode",{parentName:"td"},"std::basic_string_view"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"TTraits::char_type")," must name the same type as ",(0,i.kt)("inlineCode",{parentName:"td"},"TChar")," or the program is ill-formed.")))),(0,i.kt)("h3",{id:"member-types"},"Member types"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Member type"),(0,i.kt)("th",{parentName:"tr",align:null},"Definiton"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"traits_type")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"TTraits"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"value_type")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"TChar"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"pointer")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"value_type*"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"const_pointer")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"const value_type*"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"reference")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"value_type&"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"iterator")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://en.cppreference.com/w/cpp/named_req/RandomAccessIterator"},(0,i.kt)("inlineCode",{parentName:"a"},"LegacyRandomAccessIterator"))," to ",(0,i.kt)("inlineCode",{parentName:"td"},"value_type"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"const_iterator")),(0,i.kt)("td",{parentName:"tr",align:null},"Constant ",(0,i.kt)("a",{parentName:"td",href:"https://en.cppreference.com/w/cpp/named_req/RandomAccessIterator"},(0,i.kt)("inlineCode",{parentName:"a"},"LegacyRandomAccessIterator"))," to ",(0,i.kt)("inlineCode",{parentName:"td"},"value_type"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"reverse_iterator")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://en.cppreference.com/w/cpp/iterator/reverse_iterator"},(0,i.kt)("inlineCode",{parentName:"a"},"std::reverse_iterator<iterator>")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"const_reverse_iterator")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://en.cppreference.com/w/cpp/iterator/reverse_iterator"},(0,i.kt)("inlineCode",{parentName:"a"},"std::reverse_iterator<const_iterator>")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"size_type")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"size_t"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"difference_type")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"ptrdiff_t"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string_view_type")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"std::basic_string_view<value_type, traits_type>"))))),(0,i.kt)("h3",{id:"member-functions"},"Member functions"),(0,i.kt)("h4",{id:"constructors-and-assignment"},"Constructors and assignment"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"./member-functions/constructors"},(0,i.kt)("em",{parentName:"a"},"(constructor)"))),(0,i.kt)("td",{parentName:"tr",align:null},"Constructs a ",(0,i.kt)("inlineCode",{parentName:"td"},"basic_fixed_string"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"./member-functions/operator-assign"},(0,i.kt)("inlineCode",{parentName:"a"},"operator="))),(0,i.kt)("td",{parentName:"tr",align:null},"assigns values to the string")))),(0,i.kt)("h4",{id:"element-access"},"Element access"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"./member-functions/operator-at"},(0,i.kt)("inlineCode",{parentName:"a"},"operator[]"))),(0,i.kt)("td",{parentName:"tr",align:null},"access specified element")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"./member-functions/at"},(0,i.kt)("inlineCode",{parentName:"a"},"at"))),(0,i.kt)("td",{parentName:"tr",align:null},"access specified element with bounds checking")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"./member-functions/front"},(0,i.kt)("inlineCode",{parentName:"a"},"front"))),(0,i.kt)("td",{parentName:"tr",align:null},"accesses the first character")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"./member-functions/back"},(0,i.kt)("inlineCode",{parentName:"a"},"back"))),(0,i.kt)("td",{parentName:"tr",align:null},"accesses the last character")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"./member-functions/data"},(0,i.kt)("inlineCode",{parentName:"a"},"data"))),(0,i.kt)("td",{parentName:"tr",align:null},"returns a pointer to the first character of a string")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"./member-functions/c_str"},(0,i.kt)("inlineCode",{parentName:"a"},"c_str"))),(0,i.kt)("td",{parentName:"tr",align:null},"returns a non-modifiable standard C character array version of the string")))),(0,i.kt)("h4",{id:"iterators"},"Iterators"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"./member-functions/begin"},(0,i.kt)("inlineCode",{parentName:"a"},"begin")," ",(0,i.kt)("br",null)," ",(0,i.kt)("inlineCode",{parentName:"a"},"cbegin"))),(0,i.kt)("td",{parentName:"tr",align:null},"returns an iterator to the beginning")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"./member-functions/end"},(0,i.kt)("inlineCode",{parentName:"a"},"end")," ",(0,i.kt)("br",null)," ",(0,i.kt)("inlineCode",{parentName:"a"},"cend"))),(0,i.kt)("td",{parentName:"tr",align:null},"returns an iterator to the end")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"./member-functions/rbegin"},(0,i.kt)("inlineCode",{parentName:"a"},"rbegin")," ",(0,i.kt)("br",null)," ",(0,i.kt)("inlineCode",{parentName:"a"},"crbegin"))),(0,i.kt)("td",{parentName:"tr",align:null},"returns a reverse iterator to the beginning")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"./member-functions/rend"},(0,i.kt)("inlineCode",{parentName:"a"},"rend")," ",(0,i.kt)("br",null)," ",(0,i.kt)("inlineCode",{parentName:"a"},"crend"))),(0,i.kt)("td",{parentName:"tr",align:null},"returns a reverse iterator to the end")))),(0,i.kt)("h4",{id:"capacity"},"Capacity"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"./member-functions/empty"},(0,i.kt)("inlineCode",{parentName:"a"},"empty"))),(0,i.kt)("td",{parentName:"tr",align:null},"checks whether the fixed string is empty")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"./member-functions/size"},(0,i.kt)("inlineCode",{parentName:"a"},"size")," ",(0,i.kt)("br",null)," ",(0,i.kt)("inlineCode",{parentName:"a"},"length"))),(0,i.kt)("td",{parentName:"tr",align:null},"returns the number of characters")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"./member-functions/max_size"},(0,i.kt)("inlineCode",{parentName:"a"},"max_size"))),(0,i.kt)("td",{parentName:"tr",align:null},"returns the maximum number of characters")))),(0,i.kt)("h4",{id:"operations"},"Operations"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"./member-functions/substr"},(0,i.kt)("inlineCode",{parentName:"a"},"substr"))),(0,i.kt)("td",{parentName:"tr",align:null},"returns a substring")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/fixed_string/docs/api/member-functions/find"},(0,i.kt)("inlineCode",{parentName:"a"},"find"))),(0,i.kt)("td",{parentName:"tr",align:null},"find characters in the fixed string")))))}k.isMDXComponent=!0}}]);