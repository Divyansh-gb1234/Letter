document.addEventListener('DOMContentLoaded', function() {
    const letterBtn = document.getElementById('letterBtn');
    const arrow = document.getElementById('arrow');
    const letterOverlay = document.getElementById('letterOverlay');
    const letterClose = document.querySelector('.letter-close');
    const btn = document.querySelector('.btn');
    const btnStop = document.querySelector('.btn-stop');
    const audio = document.querySelector('.audio');
    const record = document.querySelector('.record');

    
    btn.addEventListener('click', function() {
        audio.play();
        record.classList.add('active');
        btn.classList.add('hidden');
        btnStop.classList.remove('hidden');
        btnStop.classList.add('shown');
       
        letterBtn.style.visibility = 'visible';
        arrow.style.visibility = 'visible';
    });

    btnStop.addEventListener('click', function() {
        audio.pause();
        record.classList.remove('active');
        btnStop.classList.remove('shown');
        btnStop.classList.add('hidden');
        btn.classList.remove('hidden');
        letterBtn.style.visibility = 'hidden';
        arrow.style.visibility = 'hidden';
    });

   
    letterBtn.addEventListener('click', function() {
        letterOverlay.classList.remove('hidden');
       
        setTimeout(() => {
            letterOverlay.classList.add('show');
        }, 10);
    });

    letterClose.addEventListener('click', closeLetter);

    
    letterOverlay.addEventListener('click', function(e) {
        if (e.target === letterOverlay) {
            closeLetter();
        }
    });

    
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && !letterOverlay.classList.contains('hidden')) {
            closeLetter();
        }
    });

    function closeLetter() {
        letterOverlay.classList.remove('show');
        
        setTimeout(() => {
            letterOverlay.classList.add('hidden');
        }, 300);
    }
});
