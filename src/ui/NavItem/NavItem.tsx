type NavItemProps = {
  content: string;
  setPage: (pageName: string) => void;
};

export default function NavItem({ content, setPage }: NavItemProps) {
  return (
    <div
      className="px-3 py-1"
      onClick={() => {
        setPage(content);
      }}
    >
      {content}
    </div>
  );
}
