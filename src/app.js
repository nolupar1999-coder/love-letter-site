import { useEffect } from "react";
import "./index.css";

function Section({ bg = "bg-white", title, emoji, children, imgSrc, imgAlt, quote }) {
  return (
    <section className={`${bg} py-20 px-6 text-center relative overflow-hidden`}>
      {/* More section decorations - positioned absolutely within each section */}
      <div className="absolute top-4 left-4 text-2xl opacity-20 animate-pulse">🌸</div>
      <div className="absolute top-8 right-8 text-xl opacity-25 animate-bounce">💕</div>
      <div className="absolute top-16 left-16 text-lg opacity-15">💗</div>
      <div className="absolute top-12 right-20 text-sm opacity-20">🦋</div>
      <div className="absolute top-24 left-1/4 text-xl opacity-20">✨</div>
      <div className="absolute top-6 right-1/4 text-lg opacity-15">🌺</div>
      <div className="absolute top-20 left-3/4 text-sm opacity-25">💝</div>
      <div className="absolute top-32 right-12 text-lg opacity-20">🌷</div>
      
      <div className="absolute bottom-6 left-8 text-lg opacity-20">🦋</div>
      <div className="absolute bottom-4 right-4 text-2xl opacity-25">✨</div>
      <div className="absolute bottom-12 left-12 text-xl opacity-15">💖</div>
      <div className="absolute bottom-16 right-16 text-sm opacity-20">🌹</div>
      <div className="absolute bottom-8 left-1/3 text-lg opacity-25">💫</div>
      <div className="absolute bottom-20 right-1/3 text-xl opacity-15">🌸</div>
      <div className="absolute bottom-14 left-2/3 text-sm opacity-20">💕</div>
      <div className="absolute bottom-10 right-2/3 text-lg opacity-25">🌺</div>
      
      {/* Middle decorations */}
      <div className="absolute top-1/2 left-4 text-xl opacity-15 animate-pulse">💋</div>
      <div className="absolute top-1/2 right-4 text-lg opacity-20">🌷</div>
      <div className="absolute top-1/3 left-8 text-sm opacity-25">✨</div>
      <div className="absolute top-2/3 right-8 text-xl opacity-15">💗</div>
      
      <h2 className="text-3xl font-semibold text-pink-700 mb-6 tracking-wide flex justify-center items-center gap-2 select-none relative z-10">
        <span aria-hidden="true" className="text-4xl">{emoji}</span> {title}
      </h2>
      
      {/* Quote section */}
      {quote && (
        <div className="max-w-2xl mx-auto mb-8 p-6 bg-white/60 rounded-lg border-l-4 border-pink-400 relative z-10">
          <div className="absolute -top-2 -left-2 text-lg opacity-40">💖</div>
          <div className="absolute -top-1 -right-3 text-sm opacity-30">🌺</div>
          <div className="absolute -bottom-1 -left-3 text-sm opacity-25">💕</div>
          <div className="absolute -bottom-2 -right-2 text-lg opacity-35">🌸</div>
          <p className="text-lg italic text-pink-800 font-medium">"{quote}"</p>
        </div>
      )}
      
      <div className="max-w-3xl mx-auto text-lg leading-relaxed text-gray-800 font-medium space-y-4 relative z-10">
        {children}
      </div>
      
      {imgSrc && (
        <div className="mt-8 relative z-10">
          <div className="absolute -top-4 -left-4 text-xl opacity-30 animate-pulse">💗</div>
          <div className="absolute -top-2 -right-4 text-lg opacity-25">🌷</div>
          <div className="absolute -top-6 left-1/4 text-sm opacity-20">💫</div>
          <div className="absolute -top-3 right-1/4 text-lg opacity-25">🦋</div>
          <img
            src={imgSrc}
            alt={imgAlt}
            className="mx-auto rounded-xl shadow-lg w-80 max-w-full transition-transform duration-300 hover:scale-105"
            loading="lazy"
          />
          <div className="absolute -bottom-3 -left-2 text-sm opacity-25">💫</div>
          <div className="absolute -bottom-4 -right-3 text-lg opacity-30">🌸</div>
          <div className="absolute -bottom-6 left-1/4 text-xl opacity-20">💕</div>
          <div className="absolute -bottom-2 right-1/4 text-sm opacity-25">✨</div>
        </div>
      )}
    </section>
  );
}

export default function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-pink-50 text-gray-800 min-h-screen font-sans">      
      {/* Hero Section */}
      <header className="h-screen flex flex-col justify-center items-center text-center px-6 relative overflow-hidden">
        {/* Hero decorations - these will scroll with the hero section */}
        <div className="absolute top-20 left-10 text-3xl opacity-20 animate-bounce">💖</div>
        <div className="absolute top-32 right-16 text-2xl opacity-25 animate-pulse">🌹</div>
        <div className="absolute top-1/4 left-1/4 text-xl opacity-15">🦋</div>
        <div className="absolute top-1/3 right-1/4 text-lg opacity-20">✨</div>
        <div className="absolute top-40 left-20 text-sm opacity-25">🌸</div>
        <div className="absolute top-48 right-24 text-xl opacity-15">💕</div>
        <div className="absolute top-60 left-1/3 text-lg opacity-20">🌺</div>
        <div className="absolute top-72 right-1/3 text-sm opacity-25">💝</div>
        <div className="absolute top-80 left-2/3 text-xl opacity-15">💋</div>
        <div className="absolute top-96 right-2/3 text-lg opacity-20">🌷</div>
        
        <div className="absolute bottom-32 left-8 text-2xl opacity-25">💕</div>
        <div className="absolute bottom-40 right-12 text-xl opacity-20">🌸</div>
        <div className="absolute bottom-48 left-16 text-sm opacity-15">💗</div>
        <div className="absolute bottom-56 right-20 text-lg opacity-25">🦋</div>
        <div className="absolute bottom-64 left-1/4 text-xl opacity-20">✨</div>
        <div className="absolute bottom-72 right-1/4 text-sm opacity-15">🌺</div>
        <div className="absolute bottom-80 left-3/4 text-lg opacity-25">💫</div>
        <div className="absolute bottom-88 right-3/4 text-xl opacity-20">💖</div>
        
        <h1 className="text-4xl md:text-6xl font-extrabold text-pink-700 mb-4 select-none relative z-10">
          ❤️ Hello, Love!
        </h1>
        <p className="max-w-xl text-lg font-light leading-relaxed relative z-10">
          This is my quiet little corner of the world made just for you. Scroll with me.
        </p>
        <div className="mt-16 animate-bounce relative z-10" aria-hidden="true" title="Scroll down">
          <svg
            className="w-8 h-8 text-pink-700"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </header>

      {/* Chapter 1: What You Healed In Me */}
      <Section
        title="What You Healed In Me"
        emoji="🌱"
        quote="Sometimes the medicine isn't what fixes you — it's who stays while you heal."
        imgSrc="/images/heart_cast_healing.jpg"
        imgAlt="Heart with a cast symbolizing healing"
      >
        <p>
          I was drowning in self-doubt — unsure, insecure, lost in my own mind. 
          You didn't try to fix me with words or advice. You just stayed.
        </p>
        <p>
          You accepted everything I thought was unacceptable about me. My lack of faith, 
          my insecurities about how I look, my sweaty palms, my imperfect smile — 
          all the little details I was ashamed of.
        </p>
        <p>
          That acceptance didn't just heal me — it transformed me. You helped me find 
          my voice, to stand up for myself, to fight for what I believe in. 
          You turned my softness into strength, my doubt into determination.
        </p>
        <p>
          That healed more than you'll ever know.
        </p>
      </Section>

      {/* Chapter 2: Your Beautiful Chaos */}
      <Section 
        bg="bg-pink-100" 
        title="Your Beautiful Chaos" 
        emoji="🌸"
        imgSrc="/images/middle_finger_cute.jpg"
        imgAlt="Cute illustration representing playful defiance"
      >
        <p>
          You're just as shy as I am, just as silly, just as beautifully unserious. 
          We laugh at the same stupid things, we both get flustered easily, 
          and we're both perfectly imperfect.
        </p>
        <p>
          You clear up my mind when it's cloudy. You give me new ideas when I'm stuck. 
          You improve my mental health just by being you. When I'm drowning in problems, 
          you get mad at them with me — and somehow that makes everything better.
        </p>
        <p>
          Your empathy matches mine perfectly. With you, I don't have to explain 
          how I feel — you just understand. You make me feel comfortable in my own skin.
        </p>
        <p>
          And yes, you keep flipping me off and it cracks me up every single time. 
          Your rebellious little gestures are absolutely adorable.
        </p>
      </Section>

      {/* Chapter 3: Perfect in Your Imperfection */}
      <Section
        title="Perfect in Your Imperfection"
        emoji="🫂"
        quote="You are not weird. You are wonderfully human."
        imgSrc="/images/unique_beautiful.jpg"
        imgAlt="Illustration celebrating uniqueness and beauty"
      >
        <p>
          You think you're weird, not normal, somehow broken. But that's exactly 
          what makes you human, what makes you unique, what makes you absolutely perfect.
        </p>
        <p>
          Your "imperfections" are what I fell in love with. They're not flaws — 
          they're the brushstrokes that make you a masterpiece.
        </p>
        <p>
          Besides being stunningly beautiful and gorgeous in every way, 
          your quirks and oddities are exactly what I expect from a good human being.
        </p>
        <p>
          You don't have to hide yourself. Not from me, not from anyone. 
          You're exactly who you're supposed to be.
        </p>
      </Section>

      {/* Chapter 4: When Distance Hurts */}
      <Section 
        bg="bg-pink-100" 
        title="When Distance Hurts" 
        emoji="💔"
        quote="You are not a burden. Your pain doesn't scare me. You're not weak — you're brave in slow motion."
      >
        <p>
          It breaks my heart when you're suffering and I can't be there. 
          I want to massage your legs when they ache, carry everything heavy 
          so your shoulder doesn't have to work so hard.
        </p>
        <p>
          I dream of helping you fix your spine, of making you stronger than ever, 
          of taking away every bit of physical pain you carry.
        </p>
        <p>
          But more than that, I want you to be happy. Mentally satisfied with your world. 
          I want you to achieve everything you set your mind to, to play freely, 
          to find joy in the smallest moments.
        </p>
        <p>
          Your pain doesn't make you weak — watching you carry it with grace 
          shows me just how incredibly strong you are.
        </p>
      </Section>

      {/* Chapter 5: The Poetry of You */}
      <Section
        title="The Poetry of You"
        emoji="🌹"
        quote="You're not just what the world sees. You're what it could never guess."
        imgSrc="/images/pearl_among_glass.jpg"
        imgAlt="A pearl among glass shards representing uniqueness"
      >
        <p>
          Your fingers might be small, but they're perfect and lovely in every way. 
          Your hair, your lips, your eyes — every part of you is like finding 
          a pearl among glass shards.
        </p>
        <p>
          Your beautiful body is a work of art that takes my breath away, 
          but it's so much more than that — it carries your beautiful soul.
        </p>
        <p>
          It drives me crazy that you have to handle so many home duties alone. 
          I wish I could be there to make your life easier, to take care of everything 
          so you could just rest and be loved.
        </p>
        <p>
          You deserve to be cherished, not overwhelmed. You deserve help, not more responsibility.
        </p>
      </Section>

      {/* Chapter 6: Your Voice, My Peace */}
      <Section 
        bg="bg-pink-100" 
        title="Your Voice, My Peace" 
        emoji="🎶"
        imgSrc="/images/voice_comfort.jpeg"
        imgAlt="Illustration representing the comfort of a loved one's voice"
      >
        <p>
          Just the thought of you thinking about me, caring about my problems, 
          truly believing in me — it makes my eyes tear up every time.
        </p>
        <p>
          Your voice eases my entire day. It makes me forget about the world, 
          forget my problems, even forget about my addictions. 
          You've become my only addiction now, and it's the healthiest one I've ever had.
        </p>
        <p>
          You didn't try to fix me with important questions or extra affection. 
          You just made me feel appreciated through your true connection, 
          your genuine feelings, your constant care.
        </p>
        <p>
          Whether you're sharing good emotions or bad ones, you're always there for me. 
          Always ready to listen. Always ready to care. That means everything to me.
        </p>
      </Section>

      {/* Chapter 7: Our Future */}
      <Section
        title="Our Future"
        emoji="🌟"
        quote="Love is not just a feeling — it's a promise to try, to grow, to build something beautiful together."
        imgSrc="/images/future_together.jpg"
        imgAlt="Illustration representing hope and future together"
      >
        <p>
          I want you to know that I'm going to do my absolute best to create 
          a better future for both of us. A space where we can both live comfortably, 
          where love isn't just a word but a daily reality.
        </p>
        <p>
          I promise to provide you with all the love and care you deserve — 
          not just the kind that feels good, but the kind that makes life easier, 
          safer, and more beautiful.
        </p>
        <p>
          We're going to build something incredible together. A life where your 
          shoulders don't have to carry so much, where your pain has someone 
          to help heal it, where your beautiful heart has a safe place to rest.
        </p>
        <p>
          This is just the beginning of our story.
        </p>
      </Section>

      {/* Ending */}
      <section className="py-24 px-6 bg-pink-200 text-center">
        <h2 className="text-4xl font-bold text-pink-800 tracking-wider select-none">
          That's All. But Not Really.
        </h2>
        <p className="max-w-2xl mx-auto mt-6 text-lg font-light leading-relaxed text-gray-900">
          There are a thousand little things I didn't say here.
          But I hope this is a small reflection of how I see you — 
          how much you mean to me, how grateful I am for you, 
          and how excited I am for everything we're going to build together.
        </p>
        <p className="mt-10 text-4xl font-extrabold text-pink-700 select-none" aria-label="Heart emoji">
          ❤️
        </p>
        <p className="mt-4 text-lg text-pink-800 font-medium">
          Forever yours
        </p>
      </section>
    </main>
  );
}