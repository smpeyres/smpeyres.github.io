---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

<!-- TODO (Sean): fill in years and check every line below. -->

Education
======
* Ph.D. in Nuclear, Plasma, and Radiological Engineering, University of Illinois Urbana-Champaign (in progress)
* B.S. in Nuclear, Plasma, and Radiological Engineering, University of Illinois Urbana-Champaign, YEAR

Fellowships and awards
======
* DOE NNSA Stewardship Science Graduate Fellowship, 2024–present

Research experience
======
* 2025: Practicum, Los Alamos National Laboratory

Publications
======
  <ul>{% for post in site.publications reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>

Talks
======
  <ul>{% for post in site.talks reversed %}
    {% include archive-single-talk-cv.html  %}
  {% endfor %}</ul>
