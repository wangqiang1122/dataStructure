function hanoi(n,pillar_A,pillar_B,pillar_C) {
    if (n==1) {
        console.log(`将${pillar_A}移动到${pillar_C}`)
    } else {
        hanoi(n-1,pillar_A,pillar_C,pillar_B);
        console.log(`将${pillar_A}移动到${pillar_C}`)
        hanoi(n-1,pillar_B,pillar_A,pillar_C);
    }
}

hanoi(4,'a','b','c')