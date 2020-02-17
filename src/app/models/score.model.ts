
export type scoreType = 'tribe immunity' | 'tribe reward' | 'individual immunity' | 'individual reward' | 'first boot' |
    'found idol' | 'found advantage' | 'correctly played idol' | 'correctly played advantage' | 'incorrectly played idol' |
    'incorrectly played advantage' | 'made merge' | 'came in third' | 'came in second' | 'won season' | 'recieved FTC vote';


export class Score {
    survivorId: number;
    value: number;
    episode: number;
    type: scoreType;
}