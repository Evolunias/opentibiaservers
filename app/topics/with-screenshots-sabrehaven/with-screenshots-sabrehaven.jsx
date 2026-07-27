import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-sabrehaven');
}

export default function WithScreenshotsSabrehavenKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-sabrehaven" />;
}
