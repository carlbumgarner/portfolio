const S = document.querySelector('selection').style
      N = +S.getPropertyValue("--n")

let k = +S.getPropertyValue('--k')

addEventListener('click', e => {
        let v = +e.target.dataset.inc
        if(v) S.setProperty('--k', k = ((k + v + N)%N))
})