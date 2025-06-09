<script lang="ts">
  import { onMount } from 'svelte';
  import Button from '../Button.svelte';
  
  export let isFree: boolean = true;
  export let messagesLeft: number = 5;
  
  let chatInput: string = '';
  let chatMessages: Array<{role: 'user' | 'assistant', content: string, timestamp: Date}> = [];
  let chatContainer: HTMLElement;
  let isTyping: boolean = false;
  
  // Predefined demo responses
  const demoResponses = [
    "Based on the EU AI Act, generative AI systems like the one you're describing would be classified as 'general purpose AI systems' with additional transparency requirements. You'll need to document training data, implement adequate risk management, and provide clear user guidelines. I recommend starting with a data governance framework and implementing technical safeguards for misuse prevention.",
    "When evaluating an AI vendor for regulatory compliance, you should examine: 1) Their documentation of model development and testing, 2) Transparency around data sources and processing, 3) Their risk assessment framework, 4) Security measures, and 5) How they handle model updates. Request their AI impact assessment and compliance certifications with relevant frameworks.",
    "For your organization size in the healthcare sector, I recommend implementing these core AI governance policies: 1) AI Ethics & Use Policy, 2) AI Procurement Policy, 3) Data Quality & Management Standards, 4) AI Risk Assessment Framework, and 5) Model Monitoring & Validation Guidelines. Would you like me to elaborate on any of these specific areas?",
    "The NIST AI Risk Management Framework requires organizations to govern, map, measure, and manage AI risks throughout the system lifecycle. For your specific case with computer vision systems, you'll need to focus on creating transparent data collection procedures, regular bias assessments, and ongoing monitoring for performance drift. I can help you develop specific controls tailored to your implementation.",
  ];
  
  function getRandomResponseWithDelay() {
    isTyping = true;
    
    const randomIndex = Math.floor(Math.random() * demoResponses.length);
    const response = demoResponses[randomIndex];
    
    // Simulate typing delay based on message length
    const typingDelay = Math.min(2000, 500 + response.length * 10);
    
    setTimeout(() => {
      chatMessages = [
        ...chatMessages,
        {
          role: 'assistant',
          content: response,
          timestamp: new Date()
        }
      ];
      isTyping = false;
      scrollToBottom();
      
      // Decrease messages left counter if free tier
      if (isFree) {
        messagesLeft -= 1;
      }
    }, typingDelay);
  }
  
  function handleSubmit() {
    if (!chatInput.trim()) return;
    
    // Add user message
    chatMessages = [
      ...chatMessages,
      {
        role: 'user',
        content: chatInput,
        timestamp: new Date()
      }
    ];
    
    // Clear input
    chatInput = '';
    scrollToBottom();
    
    // Get AI response
    if (!isFree || messagesLeft > 0) {
      getRandomResponseWithDelay();
    }
  }
  
  function scrollToBottom() {
    setTimeout(() => {
      if (chatContainer) {
        chatContainer.scrollTop = chatContainer.scrollHeight;
      }
    }, 50);
  }
  
  // Initial welcome message
  onMount(() => {
    chatMessages = [
      {
        role: 'assistant',
        content: "👋 Hi there! I'm your AI Risk Assistant. I can help answer questions about AI regulations, compliance requirements, vendor assessments, and more. What AI risk or compliance question can I help with today?",
        timestamp: new Date()
      }
    ];
  });
</script>

<div class="glass-card overflow-hidden flex flex-col h-full border-t-0">
  <div class="p-6 backdrop-blur-md border-b border-white/20">
    <div class="flex items-center justify-between">
      <div class="flex items-center space-x-3">
        <div class="w-10 h-10 rounded-full bg-primary-600/20 flex items-center justify-center">
          <span class="text-lg">🤖</span>
        </div>
        <div>
          <h3 class="text-lg font-semibold text-secondary-800">AI Risk Assistant</h3>
          <p class="text-sm text-secondary-600">Expert guidance on AI compliance and risk</p>
        </div>
      </div>
      {#if isFree}
        <div class="bg-primary-100/80 backdrop-blur-sm text-primary-800 text-sm font-medium px-3 py-1.5 rounded-full">
          {messagesLeft} messages left
        </div>
      {/if}
    </div>
  </div>
  
  <!-- Chat Messages -->
  <div bind:this={chatContainer} class="flex-1 overflow-y-auto p-6 space-y-4" style="max-height: 500px; min-height: 400px;">
    {#each chatMessages as message}
      <div class="flex {message.role === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in">
        <div class="{message.role === 'user' ? 'bg-primary-600 text-white' : 'glass-card'} rounded-2xl px-4 py-3 max-w-[80%] shadow-soft">
          <p class="leading-relaxed">{message.content}</p>
          <div class="text-xs {message.role === 'user' ? 'text-primary-100' : 'text-secondary-500'} mt-1 text-right">
            {message.timestamp.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
          </div>
        </div>
      </div>
    {/each}
    
    {#if isTyping}
      <div class="flex justify-start animate-fade-in">
        <div class="glass-card rounded-2xl px-4 py-3">
          <div class="flex space-x-1">
            <div class="w-2 h-2 bg-primary-400/50 rounded-full animate-bounce" style="animation-delay: 0s"></div>
            <div class="w-2 h-2 bg-primary-400/50 rounded-full animate-bounce" style="animation-delay: 0.2s"></div>
            <div class="w-2 h-2 bg-primary-400/50 rounded-full animate-bounce" style="animation-delay: 0.4s"></div>
          </div>
        </div>
      </div>
    {/if}
  </div>
  
  <!-- Input Area -->
  <div class="p-6 backdrop-blur-md border-t border-white/20">
    {#if isFree && messagesLeft <= 0}
      <div class="glass-card p-4 mb-4">
        <p class="text-secondary-800 font-medium">You've reached the limit of free messages.</p>
        <div class="mt-3">
          <Button href="/pricing" variant="primary" size="sm">Upgrade for Unlimited Access</Button>
        </div>
      </div>
    {:else}
      <form on:submit|preventDefault={handleSubmit} class="flex space-x-2">
        <input
          type="text"
          bind:value={chatInput}
          placeholder="Type your question about AI risk or compliance..."
          class="flex-1 bg-white/70 backdrop-blur-sm rounded-xl border border-white/20 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200"
        />
        <Button type="submit" variant="primary">Send</Button>
      </form>
    {/if}
  </div>
</div>

<style>
  .animate-fade-in {
    animation: fadeIn 0.3s ease-out;
  }
  
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
</style>