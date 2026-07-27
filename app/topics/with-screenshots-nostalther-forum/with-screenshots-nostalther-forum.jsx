import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-nostalther-forum');
}

export default function WithScreenshotsNostaltherForumKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-nostalther-forum" />;
}
