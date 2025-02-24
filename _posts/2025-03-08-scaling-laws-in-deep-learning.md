---
layout: post
title: Scaling Laws in Deep Learning
date: 2025-03-08T01:11:44.221Z
author: Aseem Subedi
tags: AI, scaling laws, LLMs, fingers
published: true
featured_image: ""
---

<div style="margin: 20px 0; text-align: center;">
  <img src="/assets/img/sun-and-star.jpg" alt="Image description" style="width: 100%; border-radius: 10px;" />
</div>

AI's suddenly doing all sorts of stuff – recognizing faces, writing (sort of) okay stories, the whole deal. Ever wonder what's behind it? A lot of it's this idea called **scaling laws**. Sounds technical, but it's pretty straightforward: make 'em bigger, feed 'em more, they get better (unlike us who actually start functioning slower after a burrito with extra chicken). Mostly.

### Physics Dropping Knowledge (Again)

Believe it or not, the notion of scaling isn’t exclusive to deep learning. Physicists have long observed that as you increase the size or energy of a system, its behavior changes in predictable—and sometimes dramatic—ways. Imagine heating a single water droplet versus a whole pot of water: the boiling process isn’t just a scaled-up version of what happens in that tiny droplet. That's the vibe we're talking about in AI. This predictability in change is the essence of scaling laws in physics, and it provided the inspiration for AI researchers to ask: what happens if we just keep making our neural networks bigger and better?


<div style="margin: 20px 0; text-align: center;">
  <img src="/assets/img/scaling-laws-of-small-l-3333176480.jpg" alt="Image description" style="width: 50%; border-radius: 10px;" />
</div>


### Early Clues: Translation Was Onto Something

Turns out, scale was the secret sauce.  Back in the day, researchers were wrestling with machine translation. And they noticed, the bigger the model, the more data it saw, the better it translated. Duh! But it was a big deal at the time.

This paper from 2014, "[Sequence to sequence learning with neural networks](https://www.google.com/search?q=https://proceedings.neurips.cc/paper_files/paper/2014/file/a14ac55a4f27472c5d89029b8231495a-Paper.pdf)", kinda hinted at this.  Sutskever, Vinyals, and Le showed that bigger "sequence-to-sequence" models, trained on loads of text, just translated better.  No "scaling laws" label yet, but the scale effect was obvious.

### The Scaling Laws Paper:  Formulas and Stuff

Then, 2020 rolls around, and OpenAI drops "[Scaling Laws for Neural Language Models](https://www.google.com/url?sa=E&source=gmail&q=https://www.google.com/url?sa=E%26source=gmail%26q=https://www.google.com/url?sa=E%26source=gmail%26q=http://arxiv.org/pdf/2001.08361)".  Kaplan and co. actually put numbers on this scaling thing.  Formulas, even.

Turns out, performance improves predictably when you scale:

* **Model Size (N):**  Bigger brain. More connections.  You get it.
* **Dataset Size (D):** More data gives the model a richer tapestry of patterns to learn from.
* **Compute (C):** The raw horsepower behind the training process.

They even gave us some rough formulas, showing loss goes down as you crank up N, D, and C.  Numbers like *αN* ≈ 0.076, *αD* ≈ 0.095, *αC* ≈ 0.050 floating around.  In other words, the more you invest in these areas, the better your model gets—but with diminishing returns as you push the limits.


<div style="margin: 20px 0; text-align: center;">
  <img src="/assets/img/7lhht8n.png" alt="Image description" style="width: 80%; border-radius: 10px;" />
</div>


### Smarter Scaling is a Thing

So, just keep making models huge?  Not *exactly*.  DeepMind chimed in 2022 with the "Chinchilla scaling" idea.  Paper's called "[Training compute-optimal large language models](https://www.google.com/url?sa=E&source=gmail&q=https://www.google.com/url?sa=E%26source=gmail%26q=https://arxiv.org/pdf/2203.15556)" if you're digging deeper.  Basically, they argued maybe we were making models *too* big, not using data efficiently.  They suggested for the same compute, you might be better off with a slightly smaller model but *way* more data.  Smarter scaling, not just brute force. It’s a bit like cooking stew: you can’t just pile on ingredients without considering how they blend together. Efficient scaling is about striking the right balance rather than simply reaching for the largest pot with every condiment thrown in.

Scale still rules, but it's nuanced.  It's about balancing size, data, and compute.  People are still figuring out the details:

* **Inference Compute:**  Giving models more "think time" even *after* training can boost performance.  
* **Better Architectures:**  Designing models that are just inherently better learners, getting more bang for your buck from data and compute.
* **Beyond Simple Formulas:**  Power laws are cool, but maybe there's more to the story. Sadly, the compute to do such analysis isnt available to every independent researcher :'(

### Are We Gonna Max Out?

Though scaling's been good to us, it poses the question if we are then heading for an **"information ceiling?"**  Basically, is there only so much info out there to train on?  Once AI's seen it all, does scaling even matter anymore?

Debate's still raging.  But some things to consider:

* **Data Quality is King:**  More data isn't always better data.  Crappy data in, crappy AI out.
* **Emergence vs. Understanding:**  These models are doing impressive stuff.  But are they *actually* understanding, or just mimicking patterns?  Scaling might not bridge that gap. (Emergence is a way cooler and mystical enigma if you are interested!)
* **Compute Costs (Planet Too):**  Training these monsters is expensive and energy-hungry.  Endless scaling wouldn't be so sustainable.

### Why Vision models so bad?:


* **Bad fingers:** Motion of legs is bad, and fingers are rendered even worse. I honestly haven't found a reasonable answer, but there are theories.
* **Clocks:**  All of them show 10 past 10, since all models were trained with watch faces available in the internet, and all of them clocks do tell 10:10:30. See for yourself.
* **Wine glasses:**  All of them are half full, aren't they? Same. Pictures from the internet
* **Maths and "Strawberry":**  One of the reasons openAI's O1 was code-named strawberry was for the infamous problem of initial LLMs not understanding this question (of how many r's are there in a strawberry). Believe it or not, LLMs sucked at maths for the same reason (kinda): Tokenization.

There is a ceiling from the data available to us so far, since we have used most of them up! New research will move towards new ways to make AI truly intelligent, not just… big.  It's gonna be interesting, we are finally going to move past the overhyped stuff.


<div style="margin: 20px 0; text-align: center;">
  <img src="/assets/img/dental-scaling.jpg" alt="Remember to get your teeth scaled" style="width: 80%; border-radius: 10px;" />
</div>



**References:**

* Sutskever et al. (2014): "[Sequence to sequence learning with neural networks](https://www.google.com/search?q=https://proceedings.neurips.cc/paper_files/paper/2014/file/a14ac55a4f27472c5d89029b8231495a-Paper.pdf)" -  Early hints of scale's power in translation.
* Kaplan et al. (2020): "[Scaling Laws for Neural Language Models](https://www.google.com/url?sa=E&source=gmail&q=https://www.google.com/url?sa=E%26source=gmail%26q=https://www.google.com/url?sa=E%26source=gmail%26q=http://arxiv.org/pdf/2001.08361)" -  The scaling laws bible.
* Hoffmann et al. (2022): "[Training compute-optimal large language models](https://www.google.com/url?sa=E&source=gmail&q=https://www.google.com/url?sa=E%26source=gmail%26q=https://arxiv.org/pdf/2203.15556)" -  Scaling, but make it efficient.