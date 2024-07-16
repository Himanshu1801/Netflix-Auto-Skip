function clickButton(buttonText) {
  const buttons = [...document.querySelectorAll("button")];
  const targetButton = buttons.find((button) =>
    button.innerText.includes(buttonText)
  );
  if (targetButton) {
    targetButton.click();
  }
}

function clickNextEpisode() {
  const nextEpisodeButton = document.querySelector(
    '[aria-label="Next episode"], .button-nfplayerNextEpisode'
  );
  if (nextEpisodeButton) {
    nextEpisodeButton.click();
  }
}

function observeDOMChanges() {
  const observer = new MutationObserver(() => {
    clickButton("Skip Intro");
    clickNextEpisode();
  });

  observer.observe(document.body, { childList: true, subtree: true });
}

observeDOMChanges();
