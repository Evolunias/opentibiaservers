import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-midhem-forum');
}

export default function WithScreenshotsMidhemForumKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-midhem-forum" />;
}
