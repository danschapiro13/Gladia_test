  const response = await fetch('https://api.gladia.io/v2/live', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Gladia-Key': '<YOUR_GLADIA_API_KEY_HERE>',
    },
    body: JSON.stringify({
      encoding: 'wav/ulaw',
      sample_rate: 8000,
      bit_depth: 8,
      channels: 2,
      maximum_duration_without_endpointing: 35,
      custom_metadata:{user_name:'Dan S'},
      language_config:{languages:['en','es','fr'],code_switching:true},
      pre_processing:{audio_enhancer:true},
      realtime_processing:{custom_vocabulary:true,custom_vocabulary_config:{vocabulary:['Gladia','Abi','Github']}, sentiment_analysis:true
      }
    }),
  });
  if (!response.ok) {
    // Look at the error message
    // It might be a configuration issue
    console.error(`${response.status}: ${(await response.text()) || response.statusText}`);
    process.exit(response.status);
  }

  const {id, url} = await response.json();
