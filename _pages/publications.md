---
layout: publication
permalink: /publications/
title: publications
description: publications
years: [2022, 2021] # make sure these years correspond to publications in papers.bib
nav: true
nav_order: 1
---
<!-- _pages/publications.md -->

<p>Check my <a href="https://scholar.google.com/citations?user=XL4uzUIAAAAJ&hl=en" target="_blank" rel="noopener noreferrer">Google Scholar</a> for an updated list of publications.</p>

<div class="publications">

{%- for y in page.years %}
  <h2 class="year">{{y}}</h2>
  {% bibliography -f {{ site.scholar.bibliography }} -q @*[year={{y}}]* %}
{% endfor %}

</div>
