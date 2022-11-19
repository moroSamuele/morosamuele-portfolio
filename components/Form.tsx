import Image from "next/image";
import { useFormik } from 'formik'
import { useState } from 'react'
import * as yup from 'yup';

import PatternRings from "./PatternRings";


const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

const Form = () => {
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    onSubmit: async (values, { resetForm }) => {
      setSubmitted(true);

      fetch('/api/createContactFormRequest', {
        body: JSON.stringify({
          "Full name": values.name,
          "Email": values.email,
          "Message": values.message,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST'
      });

      await sleep(1000);

      setMessage('👍 Awesome! Thanks for writing me.');
      resetForm();
      setSubmitted(false);
    },
    validationSchema: yup.object({
      name: yup.string().trim().required('If you like, you can also call yourself Mickey Mouse that\'s fine'),
      email: yup
        .string()
        .email('Don\'t try to fool me, I won\'t give it to anyone')
        .required('I need this to get back to you'),
      message: yup.string().trim().required('You seem to be of few words'),
    }),
  })


  return (
    <form onSubmit={formik.handleSubmit}>
      {
        message !== '' &&
          <div className="contactForm__sendedMessageContent">
            {message}
          </div>
      }
      <div className="contactForm__inputContainer">
        <div className="contactForm__inputContent">
          <input
            type="text"
            name="name"
            placeholder="NAME"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.name && formik.errors.name && (
            <Image
              src="/images/icons/error.svg"
              alt={formik.errors.name}
              width="24"
              height="24"
            />
          )}
        </div>
        <div className="contactForm__inputError">
          {formik.touched.name && formik.errors.name && (
            formik.errors.name
          )}
        </div>
      </div>
      <div className="contactForm__inputContainer">
        <div className="contactForm__inputContent">
          <input
            type="email"
            name="email"
            placeholder="EMAIL"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email && (
            <Image
              src="/images/icons/error.svg"
              alt={formik.errors.email}
              width="24"
              height="24"
            />
          )}
        </div>
        <div className="contactForm__inputError">
          {formik.touched.email && formik.errors.email && (
            formik.errors.email
          )}
        </div>
      </div>
      <div className="contactForm__inputContainer">
        <div className="contactForm__inputContent">
          <textarea
            name="message"
            placeholder="MESSAGE"
            value={formik.values.message}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.message && formik.errors.message && (
            <Image
              src="/images/icons/error.svg"
              alt={formik.errors.message}
              width="24"
              height="24"
            />
          )}
          <PatternRings />
        </div>
        <div className="contactForm__inputError">
          {formik.touched.message && formik.errors.message && (
            formik.errors.message
          )}
        </div>
      </div>
      <div>
        <button type="submit" disabled={submitted} className={`${ submitted ? 'contactForm__buttonIsSubmitting' : null }`}>
          { !submitted ?
              'Send message' :
              <div className="contactForm__waitingSpinner">
                <Image
                  src="/images/loading/spinner.svg"
                  alt="Waiting for sending message"
                  fill={true}
                />
              </div>
          }
        </button>
      </div>
    </form>
  )
}

export default Form;