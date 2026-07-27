import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-tibijka-forum');
}

export default function WithScreenshotsTibijkaForumKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-tibijka-forum" />;
}
