import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-sabrehaven-tibia');
}

export default function WithScreenshotsSabrehavenTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-sabrehaven-tibia" />;
}
