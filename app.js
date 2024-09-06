
// Fetch the data from the data.js file and dynamically insert it into the HTML
document.addEventListener("DOMContentLoaded", function () {
  const topicsContainer = document.getElementById('topics');
  const topicDetails = document.getElementById('topic-details');
  const topicTitle = document.getElementById('topic-title');
  const topicDescriptionEs = document.getElementById('topic-description-es');
  const topicDescriptionEn = document.getElementById('topic-description-en');
  const topicExamples = document.getElementById('topic-examples');

  // Load topics dynamically
  topics.forEach(topic => {
    const topicCard = document.createElement('div');
    topicCard.classList.add('bg-white', 'p-6', 'rounded-lg', 'shadow-md', 'hover:shadow-xl', 'transition-shadow', 'duration-200');
    
    topicCard.innerHTML = `
      <h2 class="text-xl font-semibold mb-2">${topic.title}</h2>
      <button class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600" onclick="showDetails(${topic.id})">View Details</button>
    `;
    
    topicsContainer.appendChild(topicCard);
  });

  // Show topic details when a topic is clicked
  window.showDetails = function (topicId) {
    const selectedTopic = topics.find(topic => topic.id === topicId);
    
    topicTitle.textContent = selectedTopic.title;
    topicDescriptionEs.textContent = selectedTopic.description.es;
    topicDescriptionEn.textContent = selectedTopic.description.en;
    
    // Clear previous examples
    topicExamples.innerHTML = '';

    // Create tables for examples
    ['affirmative', 'negative', 'question'].forEach(type => {
      const table = document.createElement('table');
      table.classList.add('mb-4', 'w-full', 'border-collapse', 'border', 'border-gray-300');
      
      const headerRow = document.createElement('tr');
      headerRow.innerHTML = `<th class="border px-4 py-2">${type.charAt(0).toUpperCase() + type.slice(1)} Examples</th>`;
      table.appendChild(headerRow);

      selectedTopic.examples[type].forEach(example => {
        const row = document.createElement('tr');
        row.innerHTML = `<td class="border px-4 py-2 hover:bg-gray-300 hover:scale-[1.01] transition">${example}</td>`;
        table.appendChild(row);
      });

      topicExamples.appendChild(table);
    });

    topicsContainer.classList.add('hidden');
    topicDetails.classList.remove('hidden');
  };

  // Hide the details section
  window.hideDetails = function () {
    topicsContainer.classList.remove('hidden');
    topicDetails.classList.add('hidden');
  };
});
