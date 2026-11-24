# How to make a Reed Solutions integration example

Start by watching the Workshop example with sound, then read its timed captions. The finished website edit is the reference for wording, pace, camera movement and the closing line. It runs 2:01. Use as much time as the next workflow needs. [Workshop example](https://reedsolutions.ch/integrations/supplier-delivery-delays/) · [Approved film](../public/media/integrations/supplier-delivery-delays/workshop-film.mp4) · [Final spoken words and cue times](../public/media/integrations/supplier-delivery-delays/workshop-captions.vtt)

## Choose a job someone recognises

Pick one job small enough to build and verify in two focused days. Start with an ordinary business in Switzerland, Germany or the UK, the systems it already owns, and a decision someone has to make. Manufacturing, distribution, construction and professional services are good places to look. Name the person doing the work and the record that already exists. “A buyer checks which customer orders depend on a late bearing” gives you a film you can shoot.

Write down the incoming event, the existing record it matches, the fields a practitioner would really check, the person affected and the visible output. Use fictional names and records in real test accounts wherever available. Run a normal case, a plausible exception and the same input twice. Keep evidence of what reached each live service, what was replayed and which actions used fixtures. Keep raw captures, logs and test-account details in the private project. Review every frame intended for the website for account details, real mail and unrelated records.

## Write the script and plan the shots together

Give every spoken beat a corresponding shot. A first-time viewer should understand the problem without knowing the software. A daily user should recognise the screen, fields and sequence. Use “you”, contractions, everyday verbs and the full product name on first use. Give names, dates and quantities only when they help the viewer follow the decision.

| Beat | What to say and show | Where to look in the reference |
| --- | --- | --- |
| Open on the business | “You run a workshop.” A supplier changes a date. Three customers are waiting. Ask the question the team needs answered. | 0:00–0:08 |
| Show the original job | Say **“Originally, you would…”** and walk through the original software. Show the supplier email in Outlook, the purchase order in Business Central, the reservations, the stock already on hand and the date promised to the customer. | 0:08–0:32 |
| Give the problem a moment | Say what takes time and how a believable mistake affects someone. Here, reading the right date off the wrong order could leave a customer waiting for a call. Pause before introducing Reed Solutions. | 0:32–0:40 |
| Show the automation starting | **“With a custom portal from Reed Solutions, those checks happen automatically.”** Let the supplier message arrive while the cursor is still. Show the software reading the message, matching an existing order and recording the result. Show what happens to an unclear date. | 0:40–1:01 |
| Prove the decision | Follow the same names and numbers all the way through. Two orders are covered. Limmat needs 16 bearings on Wednesday and the supplier now says Thursday. Hold long enough to read the dates. | 1:01–1:12 |
| Give the team control | **“What happens next is up to you.”** Show the applicable choices. In the Workshop film, Sales can flag a call, approve an email or WhatsApp, or save an automatic rule. Show the next event applying the saved rule without a click. | 1:12–1:38 |
| Show the record and close | Show the original input, who approved the action or which rule ran, and what happened. Replay the update and check that it produces a single action. Finish on the manual job removed and the decision the team gets time back for. | 1:38–2:01 |

Use a real counterexample when it clarifies the result. “Three orders. One call.” works because the viewer has seen why the other two are fine. Keep the film focused on the job. Put test conditions in the case page’s **What was tested?** disclosure. Describe confirmed results precisely. Use measured evidence for any time-saving figure.

## Record the approved voice

The Workshop production used **Google AI Studio, Gemini 3.8 Flash TTS, single speaker, Nika**. Select the named voice in the speech workspace. Save the voice/model selection, direction and verbatim script with the private project. If the voice catalogue changes, use the opening eight seconds of the shipped film as the listening reference when auditioning a replacement. [Speech workspace](https://aistudio.google.com/generate-speech) · [Google speech generation guide](https://ai.google.dev/gemini-api/docs/speech-generation)

Use this direction in the style field, with only the spoken words in the transcript field:

> Speak in a natural British English accent. Sound bright, warm and quietly cheerful, as if you’re showing a colleague something that will make their day easier. Smile gently on the opening question. Let the fiddly manual steps flow as one thought. Give the listener a beat to feel the problem. Land the customer’s name and the two dates clearly. Make “what happens next is up to you” sound like a genuine choice. Finish warmly and matter-of-factly. Use normal breaths and vary your pace with the meaning.

Record a whole-script take for continuous intonation. Listen to the opener, a technical sentence, a date and the close before editing the picture. Check the pronunciation of every product and company name. If one sentence needs a pickup, record it with the surrounding paragraph in the same voice and direction. Match its level and splice in a quiet natural pause. Use the same performance for the website and LinkedIn cuts.

## Capture and edit the film

1. **Build a clean starting state.** Seed the existing orders, the supplier message and the expected result. Reset the fixture before each take. In the private project, retain the script, lossless voice WAV, shot list, per-phrase cue times, source takes and verification notes. On an authorised checkout of the reference project, see `marketing/recording/portal/shots.mjs`, `native/MANIFEST.md`, `timeline.json` and `picture-edits.json` in its portal recording folder.
2. **Record the original software first.** Capture the actual inbox and business-system screens. Follow the search, click, copy, lookup and comparison. Record pointer movement and changes of screen in motion. Crop or track the field being discussed. A practitioner should be able to read it on a phone.
3. **Record the portal running.** For a browser UI, Playwright can rehearse actions against a local fixture and Chromium can capture frames at their actual timestamps. Record a single continuous action through each transition. Use a steady cursor for hands-off events. Reserve clicks for choices a human actually makes. Show the input, matched record, resulting action and the order history in sequence. Give a second reader the cut to review for readability and for any action that looks unintentionally manual.
4. **Cut picture to voice.** Transcribe or align the recorded WAV to the approved words. Mark the start and end of each phrase and map shots to those marks. Let the viewer see a control just before hearing its name. Hold on changing values and outcomes. Use smooth, purposeful moves and preserve the natural scroll speed. Keep captions in a separate lower rail, clear of the application and its controls.
5. **Export both compositions.** The web reference is **1920 × 1080, 30 fps, H.264 MP4 with AAC stereo at 48 kHz / 192 kbps and fast-start**. The LinkedIn composition is **1080 × 1350, 30 fps**. Reframe or recapture the UI for 4:5 so the deciding fields stay readable. The reference mix targets −16 LUFS, −1.5 dBTP. Its caption rail is forest green (`#263b35`) with warm white Helvetica Neue text, around 43 px on each full-resolution canvas. Break captions by spoken phrase, usually one or two lines.
6. **Make all exports agree.** Burn in the captions for muted viewing, export a matching English WebVTT for the website and SRT for LinkedIn. A script change affects the picture, the narration and every subsequent cue. Update them together. Play the final files at normal speed and listen across each splice. Check the first and last phrases, software names, dates and the final frame.

For a portable export, start with a finished, captioned picture edit and a time-aligned narration master of the same length. These commands produce the website MP4 and sidecar from those inputs:

```sh
ffmpeg -i web-picture.mov -i narration.wav -map 0:v:0 -map 1:a:0 \
  -c:v libx264 -preset veryfast -crf 16 -pix_fmt yuv420p -r 30 \
  -af loudnorm=I=-16:LRA=9:TP=-1.5 -c:a aac -b:a 192k -ar 48000 -ac 2 \
  -movflags +faststart web-film.mp4
ffmpeg -i captions.srt web-captions.vtt
```

## Add the example to this website

- **Overview.** Add the example object to the ordered registry, following `workshopExample`. Give it a stable URL, a short title such as “Workshop example”, the industry, all demonstrated software, a two-sentence blurb and a real screenshot. Include intrinsic dimensions and useful alt text. The overview renders a linked entry automatically. Its screenshot should show the actual decision. [Example registry](../app/integrations/examples.ts) · [Overview](../app/integrations/page.tsx)
- **Case page.** Create `app/integrations/<slug>/page.tsx`. Copy the Workshop structure, update the page and social-preview metadata, and connect its film and software list to the new registry entry. Use the existing site layout, typography, colours and enquiry component. Lead with the business question. Cover the original job, the automated checks, a result, the available follow-up choices and the testing note. Leave a working link back to all integrations. [Workshop page](../app/integrations/supplier-delivery-delays/page.tsx) · [Shared content](../app/integrations/IntegrationContent.tsx) · [Styles](../app/integrations/integrations.module.css)
- **Media.** Put the final website MP4, poster, WebVTT and overview screenshot under `public/media/integrations/<slug>/`. Point the registry’s film fields at these files and enter its actual running time. The shared player requests **audible inline autoplay** on the case page. Keep native pause, volume, seek and caption controls and a visible **Play with sound** action when the browser requires a gesture. The overview uses a still. [Film player](../app/integrations/IntegrationFilm.tsx)
- **Launch check.** Run the production build and exercise the actual path from the homepage’s **Integrations** link to the entry and back. Test desktop and phone widths, keyboard activation, playback with sound, direct-entry autoplay restrictions, seeking, caption timing and the enquiry link. Check that images and media load from the public domain. An authorised release to `main` triggers GitHub Pages. Confirm that the deploy job succeeds, then repeat the navigation and media checks on reedsolutions.ch. [Deployment workflow](../.github/workflows/deploy.yml)

For an outreach pack, keep the reframed LinkedIn film, screenshots, one-page brief, website article and ready-to-post copy together in the private demo project. Link the post to the case page so readers land on the workflow they just watched.

### Use the 4:5 cut on portrait phones

Add `film.portrait` with the MP4 `src` and a matching 4:5 `poster`. Give both cuts the same final picture timings, voice track and WebVTT cue times. Apply any late script edits to both compositions before export. The player uses the portrait cut below 48rem in portrait orientation and the wide cut elsewhere. Examples with only a wide film still use that file everywhere.

Open the case on a phone-width portrait viewport and check that only the portrait MP4 loads. Rotate during a spoken sentence, then rotate again while paused. Verify that the time, play/pause state, sound and captions carry across, and that a fresh landscape or desktop visit loads the wide film.
