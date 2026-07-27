import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-blazera-private-server');
}

export default function WithScreenshotsBlazeraPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-blazera-private-server" />;
}
