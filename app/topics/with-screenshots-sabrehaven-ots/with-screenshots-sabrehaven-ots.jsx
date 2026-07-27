import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-sabrehaven-ots');
}

export default function WithScreenshotsSabrehavenOtsKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-sabrehaven-ots" />;
}
