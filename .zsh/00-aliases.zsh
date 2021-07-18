alias ytp='ytfzf -St'

alias dsync='~/.emacs.d/bin/doom sync'

#system status bullshit

alias srb="sudo reboot"

alias pwr="sudo poweroff"

#pacman shit

alias update="sudo pacman -Syuu && yay -Syu"

alias install='sudo pacman -S'

alias killallbabys='sudo pacman -Qtdq | sudo pacman -Rns'

alias yss='yay -Ss'

alias ys='yay -S'

#cowsay

alias poop='cowsay -f tux "its a level 3"'

alias namaewa=' cowsay -f stimpy "jugemu jugemu gokou no surikire kaijari suigyo no sugyoumatsu furaimatsu unraimatsu kuuneru tokoro ni sumu tokoroyaburakouji no burakouji paipo paipo paipo no shuuringan shuuringan no guurindai guurindai no ponpokopii no ponpoko naa no choukyuumei no chousuke"'

#program replacement

alias ls='exa -al --color=always --group-directories-first'

alias vim="nvim"

alias v="nvim"

alias sv="sudo nvim"

alias exl="sc-im"

alias ts="teamspeak3 & disown && exit"

alias dr="sudo systemctl restart display-manager"

alias anime="python3 ~/org/anime_rater.py"

alias cpr="rsync -Pa"
