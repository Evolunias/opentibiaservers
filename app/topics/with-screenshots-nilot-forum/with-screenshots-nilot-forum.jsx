import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-nilot-forum');
}

export default function WithScreenshotsNilotForumKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-nilot-forum" />;
}
