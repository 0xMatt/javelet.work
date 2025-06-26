import { Calendar, FileText, Pin } from 'lucide-react';

export default function Links() {
  const links = [
    {
      name: 'Personal Website',
      icon: Pin,
      url: 'https://www.javelet.dev',
    },
    {
      name: 'Resume & Curriculum Vitae',
      icon: FileText,
      url: 'https://docs.google.com/document/d/e/2PACX-1vSJUHf55XVETkIOGSoYlsgEPV7WJUsIC2irrVfRT7V5zbTe-Zx3BWhW3qTe2Xd3h8awmKzuhYFtxUvL/pub',
    },
    {
      name: 'Book A Meeting',
      icon: Calendar,
      url: 'https://calendar.app.google/3k9LCCMMB7o5Q5QQ8',
    },
  ];

  return (
    <>
      <h5 className="mb-3 text-base font-semibold text-gray-900 md:text-xl dark:text-white">
        My Links
      </h5>
      <ul className="my-4 space-y-3">
        {links.map((link, index) => (
          <li key={index}>
            <a
              href={link.url}
              target="_blank"
              className="group flex items-center rounded-lg bg-gray-50 p-3 text-base font-bold text-gray-900 shadow-sm hover:bg-gray-100 hover:shadow dark:bg-gray-600 dark:text-white dark:hover:bg-gray-500"
            >
              <link.icon size={16} />
              <span className="ms-3 flex-1 whitespace-nowrap">{link.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}
