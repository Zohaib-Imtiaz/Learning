const someClassLikeObject = {
    members: ['member1', 'member2', 'member3'],
    team: 'some team',
    teamName: 'TEAM NAME',
    print: function() {
        return this.members.map(function(member) {
            console.log(`member: ${member} and team is ${this.team}`)
        })
    }
}

someClassLikeObject.print()