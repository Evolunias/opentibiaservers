import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-sabrehaven-official');
}

export default function WithScreenshotsSabrehavenOfficialKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-sabrehaven-official" />;
}
