import toast, { Toaster } from 'react-hot-toast';
import css from './SearchBar.module.css'
import { FormEvent } from 'react';

interface SearchBarProps{
  onSubmit: (searchQuery: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSubmit }) => {

    const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const form = evt.target as HTMLFormElement;
    const topicInput = form.elements.namedItem('topic') as HTMLInputElement;
    const topic = topicInput.value;
        if (topic.trim() === "") {
            toast.error('Fill the field')
            return
        }
    onSubmit(topic); 
    form.reset();
  }

  return (
    <header className={css.container}>
    <Toaster position="top-right" toastOptions={{
    className: '',
    style: {
      border: '1px solid #713200',
      padding: '16px',
      color: 'rgb(235, 60, 60)',
      width: '175px',

    },
  }} />
  <form onSubmit={handleSubmit}>
    <input className={css.input} type="text" autoComplete="off" autoFocus placeholder="Search images and photos" name="topic"/>
    <button className={css.btn} type="submit">Search</button>
  </form>    
</header>
  )
}

export default SearchBar