import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-demolidores-official');
}

export default function WithScreenshotsDemolidoresOfficialKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-demolidores-official" />;
}
