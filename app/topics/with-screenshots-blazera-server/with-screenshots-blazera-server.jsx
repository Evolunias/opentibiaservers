import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-blazera-server');
}

export default function WithScreenshotsBlazeraServerKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-blazera-server" />;
}
