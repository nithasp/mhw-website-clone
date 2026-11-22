/**
 * jQuery-like slideDown / slideUp built on the Web Animations API.
 * Animates height and vertical padding so it also works with `box-sizing: border-box`.
 *
 * @param el       element to show / hide
 * @param open     `true` = slide down, `false` = slide up, omitted = toggle
 * @param duration in ms (jQuery default for slideToggle in the original: 200 / 400)
 * @returns whether the element ends up open
 */
export function slideToggle(el: HTMLElement, open?: boolean, duration = 200): boolean {
  const isHidden = getComputedStyle(el).display === 'none';
  const shouldOpen = open ?? isHidden;

  el.getAnimations?.().forEach((a) => a.cancel());

  if (shouldOpen) {
    if (getComputedStyle(el).display === 'none') {
      el.style.display = 'block';
    }
    const style = getComputedStyle(el);
    const height = el.scrollHeight;
    el.style.overflow = 'hidden';
    const anim = el.animate(
      [
        { height: '0px', paddingTop: '0px', paddingBottom: '0px' },
        { height: `${height}px`, paddingTop: style.paddingTop, paddingBottom: style.paddingBottom },
      ],
      { duration, easing: 'ease' }
    );
    anim.onfinish = () => (el.style.overflow = '');
  } else {
    const height = el.offsetHeight;
    const style = getComputedStyle(el);
    el.style.overflow = 'hidden';
    const anim = el.animate(
      [
        { height: `${height}px`, paddingTop: style.paddingTop, paddingBottom: style.paddingBottom },
        { height: '0px', paddingTop: '0px', paddingBottom: '0px' },
      ],
      { duration, easing: 'ease' }
    );
    anim.onfinish = () => {
      el.style.display = 'none';
      el.style.overflow = '';
    };
  }
  return shouldOpen;
}
