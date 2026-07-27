import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-alastera-register');
}

export default function WithScreenshotsAlasteraRegisterKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-alastera-register" />;
}
