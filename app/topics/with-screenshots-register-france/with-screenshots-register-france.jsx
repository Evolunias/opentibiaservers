import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-register-france');
}

export default function WithScreenshotsRegisterFranceKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-register-france" />;
}
