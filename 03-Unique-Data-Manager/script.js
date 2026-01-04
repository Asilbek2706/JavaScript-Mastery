const tagsSet = new Set(['JavaScript', 'React'])

const userMap = new Map()
userMap.set('role', 'Admin')
userMap.set('lastLogin', 'Today')

const tagInput = document.querySelector('#tag-input')
const addBtn = document.querySelector('#add-btn')
const tagsDisplay = document.querySelector('#tags-display')

const app = {
    renderTags() {
        tagsDisplay.innerHTML = [...tagsSet].map(tag => `<span>#${tag}</span>`).join('')
    },

    addTag() {
        const value = tagInput.value.trim()
        if (value) {
            tagsSet.add(value)
            tagInput.value = ''
            this.renderTags()
        }
    },

    init() {
        addBtn.addEventListener('click', this.addTag.bind(this))
        this.renderTags()

        console.log("User role:", userMap.get('role'))
    }
}

app.init()