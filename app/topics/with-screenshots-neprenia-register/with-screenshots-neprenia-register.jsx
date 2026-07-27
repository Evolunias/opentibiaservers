import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-neprenia-register');
}

export default function WithScreenshotsNepreniaRegisterKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-neprenia-register" />;
}
