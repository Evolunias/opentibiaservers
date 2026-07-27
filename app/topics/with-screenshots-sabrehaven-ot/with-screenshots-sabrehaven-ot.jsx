import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-sabrehaven-ot');
}

export default function WithScreenshotsSabrehavenOtKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-sabrehaven-ot" />;
}
