import React, {Component} from 'react';
import CollaPanel from './CollaPanel';

// Displays the list of terms
class SearchList extends Component {

    render() {
        let wordsList; // the list of words to display
        const {currentFilter, glossary , searchInput} = this.props;

        // Sort the glossary lexicographically
        const sortedGlossary = glossary.sort((a, b) => {
            let wordA = a.word.toUpperCase();
            let wordB = b.word.toUpperCase();
            if (wordA < wordB){
                return -1;
            }
            if (wordA > wordB){
                return 1;
            }
            return 0;
        });

        // Apply filters
        if(currentFilter === 'ALL' && searchInput === ''){
            wordsList = sortedGlossary;
        }
        else if(currentFilter === 'ALL'){
            wordsList = sortedGlossary.filter( w =>
                     w.word.toLowerCase().indexOf(searchInput.toLowerCase()) === 0
            );
        } else {
            wordsList = sortedGlossary.filter(w =>
                w.word.toLowerCase().indexOf(searchInput.toLowerCase()) === 0
                && (w.lang.toUpperCase() === currentFilter.toUpperCase())
            );
        }

        const panels = wordsList.map((word, i) =>
            <CollaPanel word={word} key={i}/>
        );

        return (
            <div>
            {panels}
            </div>
        );
    }
}

export default SearchList;