function skillsMember() {
    var member = {
        name: 'John',
        age: 30,
        skills: ['js', 'html', 'css'],
        getSkills: function() {
            return this.skills;
        }
    }
    return member;
}