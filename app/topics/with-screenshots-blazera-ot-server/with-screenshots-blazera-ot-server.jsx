import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-blazera-ot-server');
}

export default function WithScreenshotsBlazeraOtServerKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-blazera-ot-server" />;
}
